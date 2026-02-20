const AdmZip = require('adm-zip');
const { DOMParser } = require('@xmldom/xmldom');
const fs = require('fs');

try {
    const zip = new AdmZip('doc/FWA WEBSITE HEB Remarks.docx');
    const zipEntries = zip.getEntries();
    
    const documentEntry = zipEntries.find(entry => entry.entryName === 'word/document.xml');
    
    if (!documentEntry) {
        console.error('word/document.xml not found in the docx file');
        process.exit(1);
    }
    
    const xmlData = documentEntry.getData().toString('utf8');
    const doc = new DOMParser().parseFromString(xmlData, 'text/xml');
    
    let output = '';

    function processNode(node) {
        if (!node) return;

        // paragraphs
        if (node.nodeName === 'w:p') {
            output += '\n';
            for (let i = 0; i < node.childNodes.length; i++) {
                processNode(node.childNodes[i]);
            }
        }
        else if (node.nodeName === 'w:r') {
            // run
            let isHighlightYellow = false;
            
            // Check properties
            const rPr = Array.from(node.childNodes).find(n => n.nodeName === 'w:rPr');
            if (rPr) {
                const highlight = Array.from(rPr.childNodes).find(n => n.nodeName === 'w:highlight');
                if (highlight) {
                    const val = highlight.getAttribute('w:val');
                    if (val === 'yellow') {
                        isHighlightYellow = true;
                    }
                }
            }
            
            // Find text
            const tNode = Array.from(node.childNodes).find(n => n.nodeName === 'w:t');
            if (tNode && tNode.firstChild) {
                let text = tNode.firstChild.nodeValue;
                if (isHighlightYellow) {
                    output += `[HIGHLIGHT: ${text}]`;
                } else {
                    output += text;
                }
            }
        }
        else if (node.nodeName === 'w:ins') {
            output += '[INS: ';
            for (let i = 0; i < node.childNodes.length; i++) {
                processNode(node.childNodes[i]);
            }
            output += ']';
        }
        else if (node.nodeName === 'w:del') {
            output += '[DEL: ';
            function getDelText(n) {
                if (n.nodeName === 'w:delText' && n.firstChild) {
                    output += n.firstChild.nodeValue;
                }
                for (let i = 0; i < n.childNodes?.length || 0; i++) {
                    getDelText(n.childNodes[i]);
                }
            }
            getDelText(node);
            output += ']';
        }
        else if (node.childNodes && node.childNodes.length > 0 && node.nodeName !== 'w:ins' && node.nodeName !== 'w:del' && node.nodeName !== 'w:r' && node.nodeName !== 'w:p') {
            for (let i = 0; i < node.childNodes.length; i++) {
                processNode(node.childNodes[i]);
            }
        }
    }

    const body = doc.getElementsByTagName('w:body')[0];
    if (body) {
        for (let i = 0; i < body.childNodes.length; i++) {
            processNode(body.childNodes[i]);
        }
    }

    fs.writeFileSync('docx_parsed.txt', output, 'utf8');
    console.log("Parsing complete. Check docx_parsed.txt");
} catch (e) {
    console.error(e);
}

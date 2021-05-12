const PDFExtract = require('pdf.js-extract').PDFExtract;

const pdfExtract = new PDFExtract();
const options = {}; /* see below */

const pageContent = '';

pdfExtract.extract('./Final Collection 251835416.pdf', options, (err, data) => {
    if (err) {
        return console.log(err)
    };

    console.log(data.pages[0].content);
    
    for (const char of data.pages[0].content) {
        pageContent.concat(char.str);
    }
});

/**
 * TODO: Extract address
 * Loop trough `data.pages[0].content` or trough pages and then loop trough content in case of multiple pages
 * get the value of the str prop and create a string with all the text content of the page
 *
 */





console.log(pageContent);
import React, { Component, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import sample from '../static/sample.pdf';



export default class PdfComponent extends Component {

    render() {
        return (
            <div>
                <Showpdf />
            </div>
        )
    }
}
export const Showpdf = () => {
    //const url = "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }
    return (
        <div className="App">
            <p> here is my resume.</p>

            <Document
                 file={sample} 
                /* file={url} */
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    );
}


//  function fileToBase64("Resume.pdf", "src\UtilComponents\Resume.pdf").then(result => {
//     console.log(result);
//   });

export const fileToBase64 = (filename, filepath) => {
    return new Promise(resolve => {
        var file = new File([filename], filepath);
        var reader = new FileReader();
        // Read file content on file loaded event
        reader.onload = function (event) {
            resolve(event.target.result);
        };

        // Convert data to base64 
        reader.readAsDataURL(file);
    });
};
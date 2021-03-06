import { useState } from "react";
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { useDialog } from 'react-st-modal';

import styles from "./ContextMenu.module.scss";

function TodoExportMenu({ title, todos, setOpened }) {
    const dialog = useDialog();
    const headers = ["todo", "completed", "sub"]

    const [value, setValue] = useState();

    const getData = () => {
        return todos.map(todo => ({
            todo: todo.text,
            completed: todo.completed,
            sub: todo.sub
        }));
    }
    const download = (data, type, extension) => {
        const blob = new Blob([data], { type: type });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.setAttribute("hidden", "");
        a.setAttribute("href", url);
        a.setAttribute("download", `${title.toLowerCase().replace(/ /g, "-")}.${extension}`);
        //console.log(data, type, extension);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
 
    async function exportCSV() {
        const data = getData();
        const csvRows = [];
        csvRows.push(headers.join(','));
        for (const row of data) {
            const values = headers.map(header => {
                const escaped = ("" + row[header]).replace(/"/g, '\\"');
                return `"${escaped}"`;
            });
            csvRows.push(values.join(','));
        }
        const csvData = csvRows.join("\n");
        download(csvData, "text/csv", "csv");
    };

    async function exportJSON() {
        const data = getData();
        const jsonBegin = `{"title":"${ title }","todos":[`;
        let jsonRows = "";
        for (const row of data) {
            jsonRows = jsonRows.concat(',{');
            for (const header of headers) {
                const escaped = ("" + row[header]).replace(/"/g, '\\"');
                jsonRows = jsonRows.concat(`"${header}":`, `"${escaped}"`);
                if (headers.indexOf(header) !== headers.length -1) {
                    jsonRows = jsonRows.concat(",");
                }
            }
            jsonRows = jsonRows.concat('}');
        }
        const jsonData = `${ jsonBegin }${ jsonRows.replace(",", "").concat("]}") }`;
        download(jsonData, "application/json", "json");
    };

    async function exportPDF() {
        setOpened(false);
        let domElement = document.getElementById('root');
        htmlToImage.toPng(domElement, { quality: .95 })
        .then(function (dataUrl) {
            const doc = new jsPDF();
            const imgProps = doc.getImageProperties(dataUrl);
            const pdfWidth = doc.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            doc.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
            doc.save(`${title.toLowerCase().replace(/ /g, "-")}.pdf`);
        })
        .catch(function (error) {
            console.error("Something went wrong!", error);
        });
    };

    async function exportIMG() {
        setOpened(false);
        let domElement = document.getElementById('root');
        htmlToImage.toPng(domElement, { quality: .95 })
        .then(function (dataUrl) {
            const a = document.createElement("a");
            a.setAttribute("hidden", "");
            a.setAttribute("href", dataUrl);
            a.setAttribute("download", `${title.toLowerCase().replace(/ /g, "-")}.png`);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        })
        .catch(function (error) {
            console.error("Something went wrong!", error);
        });
    };

    async function exportText() {
        const data = getData();
        let txtRows = "";
        for (const row of data) {
            const escaped = ("" + row["todo"]).replace(/"/g, '\\"');
            txtRows = txtRows.concat(`${ row.sub ? "\t" : "" }${row.completed ? "&check;" : "&cir;" } `, escaped);
            txtRows = txtRows.concat('\n');
        }
        const txtData = txtRows;
        download(txtData, "text", "txt");
    };

    return (
        <div className={ styles.exportMenu }>
            <button onClick={() => {
                exportCSV();
                dialog.close(value);
            }}>
                <i className="fas fa-file-csv" />
                <h3>CSV</h3>
            </button>
            <button onClick={() => {
                exportJSON();
                dialog.close(value);
            }}>
                <i className="fab fa-js" />
                <h3>JSON</h3>
            </button>
            <button onClick={() => {
                exportPDF();
                dialog.close(value);
            }}>
                <i className="fas fa-file-pdf" />
                <h3>PDF</h3>
            </button>
            <button onClick={() => {
                exportIMG();
                dialog.close(value);
            }}>
                <i className="fas fa-file-image" />
                <h3>Image</h3>
            </button>
            <button onClick={() => {
                exportText();
                dialog.close(value);
            }}>
                <i className="fas fa-file-alt" />
                <h3>TXT</h3>
            </button>
        </div>
    );
}

export default TodoExportMenu;
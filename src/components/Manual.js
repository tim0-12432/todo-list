import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import mdFile from "./../docs/markdown/manual.md";

const gfm = require("remark-gfm");

export default function Manual({ open, setManualOpen }) {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(mdFile)
            .then((response) => response.text())
            .then(text => {
                setMarkdown(text);
            });
    }, []);

    const renderers = {
        code: ({ language, value }) => {
            return <SyntaxHighlighter style={ materialDark } language={ language } children={ value } />
        }
    };

    return (
        <div className={ `manual ${open ? "manual-open" : ""}` }>
            <div className="manualClose" onClick={ () => setManualOpen(false) }>
                <i className="fas fa-times"></i>
            </div>
            <ReactMarkdown plugins={[gfm]} renderers={ renderers } children={ markdown } />
        </div>
    )
}


import { useState } from "react";
import { CustomDialog } from "react-st-modal";
import TodoImportMenu from "./TodoImportMenu";
import TodoExportMenu from "./TodoExportMenu";

const Settings = ({ title, todos, setTodos }) => {
    const [opened, setOpened] = useState(false);

    const openHandler = () => {
        setOpened(!opened);
    };
    const exportHandler = async () => {
        const result = await CustomDialog(
            <TodoExportMenu title={ title }
                            todos={ todos }
            />,
            {
                title: "Export Options",
                showCloseIcon: true,
            }
        );
    };
    const importHandler = () => {
        const input = document.getElementById("file-input-import");
        input.click();
    };
    const fileChangeHandler = async (e) => {
        const selectedFile = e.target.files[0];
        const result = await CustomDialog(
            <TodoImportMenu title={ title }
                            todos={ todos }
                            setTodos={ setTodos }
                            file={ selectedFile }
            />,
            {
                title: "Import Options",
                showCloseIcon: true,
            }
        );
    };

    return (
        <div className="settings-container">
            <div className="settings-btn" onClick={ openHandler }>
                <i className={ `fas fa-${ opened ? "times": "cog" }` } />
            </div>
            <div className="settings-menu" style={{ display: `${ opened ? "flex" : "none" }` }}>
                <button onClick={ importHandler } disabled>
                    <i className="fas fa-file-upload" />
                    <h3>Import</h3>
                </button>
                <button onClick={ exportHandler }>
                    <i className="fas fa-file-download" />
                    <h3>Export</h3>
                </button>
            </div>
            <input
                id="file-input-import"
                type="file"
                accept="application/JSON, application/json"
                style={{display: "none"}}
                onChange={ (e) => fileChangeHandler(e) }
            />
        </div>
    );
};

export default Settings;
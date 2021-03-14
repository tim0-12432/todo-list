
import { useState } from "react";
import { CustomDialog } from "react-st-modal";
import TodoImportMenu from "./../ContextMenus/TodoImportMenu";
import TodoExportMenu from "./../ContextMenus/TodoExportMenu";

import styles from "./Settings.module.scss";

const Settings = ({ title, todos, setTodos, handleOpenManual }) => {
    const [opened, setOpened] = useState(false);

    const openHandler = () => {
        setOpened(!opened);
    };
    const exportHandler = async () => {
        const result = await CustomDialog(
            <TodoExportMenu title={ title }
                            todos={ todos }
                            setOpened={ setOpened }
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
        <div className={ styles.settingsContainer }>
            <div className={ styles.settingsBtn } onClick={ openHandler }>
                <i className={ `fas fa-${ opened ? "times": "cog" }` } />
            </div>
            <div className={ styles.settingsMenu } style={{ display: `${ opened ? "flex" : "none" }` }}>
                <button onClick={ handleOpenManual }>
                    <i className="fas fa-map" />
                    <h3>Manual</h3>
                </button>
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
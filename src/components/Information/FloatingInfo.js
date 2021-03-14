import React, { useState } from "react";

import styles from "./Information.module.scss";

const FloatingInfo = () => {
    const [opened, setOpened] = useState(false);

    const openHandler = () => {
        setOpened(!opened);
    };

    return (
        <div className={ styles.fabContainer }>
            <div className={ styles.floatingBtn } onClick={ openHandler }>
                <i className={ `fas fa-${ opened ? "times": "info" }` } />
            </div>
            <div className={ styles.floatingText } style={{ display: `${ opened ? "block" : "none" }` }}>
                <p><i className="fas fa-cookie-bite" />No cookies!</p>
                <p><i className="fas fa-database" />No hidden cache!</p>
                <p><i className="far fa-hdd" />Data stored in your browser's local storage!</p>
                <p><i className="fab fa-github" /><a href="https://github.com/tim0-12432/todo-list" target="_blank">Open source!</a></p>
            </div>
        </div>
    );
}

export default FloatingInfo;
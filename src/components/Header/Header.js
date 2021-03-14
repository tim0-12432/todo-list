import styles from "./Header.module.scss";

const Header = ({ title, changeTitleHandler }) => {
    return (
        <header onClick={ changeTitleHandler }>
            { title }
            <i className="fas fa-pencil-alt" />
        </header>
    );
};

export default Header;
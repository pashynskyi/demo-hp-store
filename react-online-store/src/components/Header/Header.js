import React from 'react';
import styles from './Header.module.css';
import MainHeader from './MainHeader/MainHeader';
import NavHeader from './NavHeader/NavHeader';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <MainHeader />
            <NavHeader />
        </header>

    );
}

export default Header;
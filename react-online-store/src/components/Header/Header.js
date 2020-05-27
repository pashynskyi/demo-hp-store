import React from 'react';
import styles from './Header.module.css';
import MainHeaderContainer from './MainHeader/MainHeaderContainer';
import NavHeader from './NavHeader/NavHeader';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <MainHeaderContainer />
            <NavHeader />
        </header>

    );
}

export default Header;
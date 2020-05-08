import React from 'react';
import styles from './DropDownMenu.module.css';
import { NavLink } from 'react-router-dom';

const DropDownMenu = (props) => {
    return (
        <li className={styles.dropDownMenu}>Каталог товаров
            <ul>
                <li className={styles.item}>
                    <NavLink to="/men-home" activeClassName={styles.activeLink}>Мужчинам</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/women-home" activeClassName={styles.activeLink}>Женщинам</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/kids-home" activeClassName={styles.activeLink}>Детям</NavLink>
                </li>
            </ul>
        </li>
    );
}

export default DropDownMenu;
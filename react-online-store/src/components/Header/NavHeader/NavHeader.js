import React from 'react';
import styles from './NavHeader.module.css'
import DropDownMenu from './DropDownMenu/DropDownMenu';

const NavHeader = (props) => {
    return (
        <nav className={styles.navHeader}>
            <ul className={styles.menuHeader}>
               <DropDownMenu />
                <li>О компании</li>
                <li>Контакты</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Галерея</li>
            </ul>
        </nav>
    );
}

export default NavHeader;
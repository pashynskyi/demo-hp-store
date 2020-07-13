import React from 'react';
import styles from './NavHeader.module.css'
import DropDownMenu from './DropDownMenu/DropDownMenu';
import { NavLink } from 'react-router-dom';

const NavHeader = (props) => {
  return (
    <nav className={styles.navHeader}>
      <div>
        <input type="checkbox" id={styles.checkboxMenu} />
        <label for={styles.checkboxMenu}>
          <ul className={`${styles.topMenu} ${styles.touch}`}>
            <DropDownMenu />
            <li className={styles.item}>
              <NavLink to="/about-us" activeClassName={styles.activeLink}>О компании</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/contact-us" activeClassName={styles.activeLink}>Контакты</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/delivery" activeClassName={styles.activeLink}>Доставка</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/payment" activeClassName={styles.activeLink}>Оплата</NavLink>
            </li>
            <li className={styles.item}>
              <NavLink to="/news-discounts" activeClassName={styles.activeLink}>Новости и скидки</NavLink>
            </li>
          </ul>
          <span className={styles.toggle}>&#9776;</span>
        </label>
      </div>
    </nav>
  );
}

export default NavHeader;
import React from 'react';
import styles from './NavHeader.module.css'
import DropDownMenu from './DropDownMenu/DropDownMenu';
import { NavLink } from 'react-router-dom';

const NavHeader = (props) => {
  return (
    // <nav className={styles.navHeader}>
    //   <ul className={styles.topMenu}>
    //     <li className={styles.item}>
    //       <NavLink className={styles.icon} to="#">&#9776;</NavLink>
    //     </li>
    //     <DropDownMenu />
    //     <li className={styles.item}>
    //       <NavLink to="/about-us" activeClassName={styles.activeLink}>О компании</NavLink>
    //     </li>
    //     <li className={styles.item}>
    //       <NavLink to="/contact-us" activeClassName={styles.activeLink}>Контакты</NavLink>
    //     </li>
    //     <li className={styles.item}>
    //       <NavLink to="/delivery" activeClassName={styles.activeLink}>Доставка</NavLink>
    //     </li>
    //     <li className={styles.item}>
    //       <NavLink to="/payment" activeClassName={styles.activeLink}>Оплата</NavLink>
    //     </li>
    //     <li className={styles.item}>
    //       <NavLink to="/gallery" activeClassName={styles.activeLink}>Галерея</NavLink>
    //     </li>
    //   </ul>
    // </nav>


    <nav className={styles.navHeader}>
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
            <NavLink to="/gallery" activeClassName={styles.activeLink}>Галерея</NavLink>
          </li>
        </ul>
        <span className={styles.toggle}>&#9776;</span>
      </label>
    </nav>
  );
}

export default NavHeader;
import React from 'react';
import styles from './MenDropMenu.module.css';
import { NavLink } from 'react-router-dom';

const MenDropMenu = () => {
  return (
    <li className={styles.menDropMenu}>
      <NavLink to="/men-home" activeClassName={styles.activeLink}>Мужчинам</NavLink>
      <ul className={styles.submenu}>
        <li className={styles.item}>
          <NavLink to="/collection/men-home/t-shirts" activeClassName={styles.activeLink}>Футболки</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/collection/men-home/shirts" activeClassName={styles.activeLink}>Рубашки</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/collection/men-home/jeans" activeClassName={styles.activeLink}>Джинсы</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/collection/men-home/shorts" activeClassName={styles.activeLink}>Шорты</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/collection/men-home/jackets" activeClassName={styles.activeLink}>Куртки</NavLink>
        </li>
      </ul>
    </li>
  )
}

export default MenDropMenu;
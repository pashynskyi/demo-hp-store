import React from 'react';
import styles from './WomenDropMenu.module.css';
import { NavLink } from 'react-router-dom';

const WomenDropMenu = () => {
  return (
    <li className={styles.womenDropMenu}>
      <NavLink to="/women-home" activeClassName={styles.activeLink}>Женщинам</NavLink>
      <ul className={styles.submenu}>
        <li className={styles.item}>
          <NavLink to="/collection/women-home/t-shirts" activeClassName={styles.activeLink}>
            Футболки
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/collection/women-home/shorts" activeClassName={styles.activeLink}>
            Шорты
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/collection/women-home/hoodies" activeClassName={styles.activeLink}>
            Худи
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/collection/women-home/skirts" activeClassName={styles.activeLink}>
            Юбки
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/collection/women-home/dresses" activeClassName={styles.activeLink}>
            Платья
          </NavLink>
        </li>
      </ul>
    </li>
  )
}

export default WomenDropMenu;
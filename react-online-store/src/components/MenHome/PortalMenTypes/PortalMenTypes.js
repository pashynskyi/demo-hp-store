import React from 'react';
import styles from './PortalMenTypes.module.css';
import { NavLink } from 'react-router-dom';

const PortalMenTypes = () => {
  return (
    <div>
      <ul className={styles.portalType}>
        <li>
          <NavLink className={styles.typeLink}  to="/collection/men-home/t-shirts" activeClassName={styles.activeLink}>
            Футболки
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.typeLink}  to="/collection/men-home/shirts" activeClassName={styles.activeLink}>
            Рубашки
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.typeLink} to="/collection/men-home/jeans" activeClassName={styles.activeLink}>
            Джинсы
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.typeLink}  to="/collection/men-home/shorts" activeClassName={styles.activeLink}>
            Шорты
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.typeLink}  to="/collection/men-home/jackets" activeClassName={styles.activeLink}>
            Куртки
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PortalMenTypes;
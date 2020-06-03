import React from "react";
import styles from "./PortalMenTypes.module.css";
import { NavLink } from "react-router-dom";

const PortalMenTypes = () => {
  return (
    <div>
      <ul className={styles.portalType}>
        <li>
          <NavLink to="/men-home/t-shirts" activeClassName={styles.activeLink}>
            Футблолки
          </NavLink>
        </li>
        <li>
          <NavLink to="/men-home/shirts" activeClassName={styles.activeLink}>
            Рубашки
          </NavLink>
        </li>
        <li>
          <NavLink to="/men-home/jeans" activeClassName={styles.activeLink}>
            Джинсы
          </NavLink>
        </li>
        <li>
          <NavLink to="/men-home/shorts" activeClassName={styles.activeLink}>
            Шорты
          </NavLink>
        </li>
        <li>
          <NavLink to="/men-home/jackets" activeClassName={styles.activeLink}>
            Куртки
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PortalMenTypes;
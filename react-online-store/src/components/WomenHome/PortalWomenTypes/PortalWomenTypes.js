import React from "react";
import styles from "./PortalWomenTypes.module.css";
import { NavLink } from "react-router-dom";

const PortalWomenTypes = () => {
  return (
    <div>
      <ul className={styles.portalType}>
        <li>
          <NavLink to="/collection/women-home/t-shirts" activeClassName={styles.activeLink}>
            Футболки
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection/women-home/shorts" activeClassName={styles.activeLink}>
            Шорты
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection/women-home/hoodies" activeClassName={styles.activeLink}>
            Фуди
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection/women-home/skirts" activeClassName={styles.activeLink}>
            Юбки
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection/women-home/dresses" activeClassName={styles.activeLink}>
            Платья
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PortalWomenTypes;
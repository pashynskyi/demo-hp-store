import React from "react";
import styles from "./PortalList.module.css";
import { NavLink } from "react-router-dom";

const PortalList = () => {
    return (
        <div className={styles.portalWrapper}>
            <ul className={styles.portalList}>
                <li className={styles.portalItem}>
                    <NavLink to="/men-home" activeClassName={styles.activeLink}>Мужчинам</NavLink>
                </li>
                <li className={styles.portalItem}>
                    <NavLink to="/women-home" activeClassName={styles.activeLink}>Женщинам</NavLink>
                </li>
                <li className={styles.portalItem}>
                    <NavLink to="/kids-home" activeClassName={styles.activeLink}>Детям</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default PortalList;


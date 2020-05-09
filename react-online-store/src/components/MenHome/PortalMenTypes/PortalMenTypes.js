import React from "react";
import styles from "./PortalMenTypes.module.css";
import { NavLink } from "react-router-dom";

const PortalMenTypes = () => {
    return (
        <div>
            <ul className={styles.portalType}>
                <li>
                    <NavLink to="/men-home/t-shirt" activeClassName={styles.activeLink}>
                        Футблолки и поло
                    </NavLink>
                </li>
                <li>Рубашки</li>
                <li>Джинсы</li>
                <li>Брюки</li>
                <li>Верхняя одежда</li>
            </ul>
        </div>
    );
}

export default PortalMenTypes;
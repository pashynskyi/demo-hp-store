import React from "react";
import styles from "./WomenHome.module.css";
import { NavLink } from "react-router-dom";
import PortalList from "../PortalList/PortalList";

const WomenHome = (props) => {
    return (
        <section>
            <div className={styles.portalWrapper}>
                <PortalList />
            </div>
        </section>
    );
}

export default WomenHome;
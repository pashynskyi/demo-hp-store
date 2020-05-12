import React from "react";
import styles from "./KidsHome.module.css";
import { NavLink } from "react-router-dom";
import PortalList from "../PortalList/PortalList";

const KidsHome = (props) => {
    return (
        <section>
            <div className={styles.portalWrapper}>
                <PortalList />
            </div>
        </section>
    );
}

export default KidsHome;
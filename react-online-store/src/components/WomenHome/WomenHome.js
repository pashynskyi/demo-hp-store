import React from "react";
import styles from "./WomenHome.module.css";
import PortalList from "../PortalList/PortalList";
import PortalWomenTypes from "./PortalWomenTypes/PortalWomenTypes";
import womenWidePhoto from '../../assets/images/women_wide_1.jpg';

const WomenHome = (props) => {
    return (
        <section>
            <PortalList />
            <PortalWomenTypes />
            <div>
                <img className={styles.menWidePhoto} src={womenWidePhoto} alt="" />
            </div>
        </section>
    );
}

export default WomenHome;
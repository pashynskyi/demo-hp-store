import React from "react";
import styles from "./MenHome.module.css";
import PortalList from "../PortalList/PortalList";
import PortalMenTypes from "./PortalMenTypes/PortalMenTypes";
import menWidePhoto from '../../assets/images/men_wide_1.jpg';

const MenHome = (props) => {
    return (
        <section>
            <PortalList />
            <PortalMenTypes />
            <div>
                <img className={styles.womenWidePhoto} src={menWidePhoto} alt="" />
            </div>
        </section>
    );
}

export default MenHome;
import React from "react";
import styles from "./MenTSirts.module.css";
import PortalList from "../MenHome/PortalList/PortalList";
import PortalMenTypes from "../MenHome/PortalMenTypes/PortalMenTypes";

const MenTSirts = () => {
    return (
        <div>
            <PortalList />
            <PortalMenTypes />
            <div>T-shirt page!</div>
        </div>
    );
}

export default MenTSirts;

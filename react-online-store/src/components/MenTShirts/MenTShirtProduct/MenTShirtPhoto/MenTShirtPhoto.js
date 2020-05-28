import React from "react";
import styles from "./MenTShirtPhoto.module.css";

const MenTShirtPhoto = (props) => {
    return (
        <div className={styles.containerPhoto}>
            <img className={styles.productPhoto} src={props.pictureUrl} alt="" />
        </div>
    );
}

export default MenTShirtPhoto;
import React from "react";
import styles from "./MenTShirtPhoto.module.css"
// import man_photo_01 from "../../../../assets/images/manTShirt_01_1.png";

const MenTShirtPhoto = (props) => {
    return (
        <div className={styles.containerPhoto}>
            <img className={styles.productPhoto} src={props.pictureUrl} alt="" />
        </div>
    );
}

export default MenTShirtPhoto;
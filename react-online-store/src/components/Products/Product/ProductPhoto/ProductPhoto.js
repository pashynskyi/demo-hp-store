import React from "react";
import styles from "./ProductPhoto.module.css";

const ProductPhoto = (props) => {
    return (
        <div className={styles.containerPhoto}>
            <img className={styles.productPhoto} src={props.pictureUrl} alt="" />
        </div>
    );
}

export default ProductPhoto;
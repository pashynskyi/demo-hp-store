import React from "react";
import styles from "./ProductPhoto.module.css";
import ProductModal from "../../../ProductModal/ProductModal";

const ProductPhoto = (props) => {
    return (
        <div className={styles.containerPhoto}>
            <img className={styles.productPhoto} src={props.pictureUrl} alt="" />
            <div className={styles.containerModal}>
                <ProductModal pictureUrl={props.pictureUrl} />
            </div>
        </div>
    );
}

export default ProductPhoto;
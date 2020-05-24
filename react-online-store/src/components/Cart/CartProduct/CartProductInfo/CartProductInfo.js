import React from "react";
import styles from "./CartProductInfo.module.css";

const CartProductInfo = (props) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.photoContainer}>
                <img src={props.pictureUrl} alt='' />
            </div>
            <div className={styles.infoContainer}>
                <div>{props.productFirm}<span> / {props.productType}</span></div>
                <div>Состав:<span> {props.productMaterial}</span></div>
                <div>Размер(UKR): <span>{props.productSizes}</span></div>
                <div>{props.productPrice}</div>
            </div>
        </div>
    );
}

export default CartProductInfo;
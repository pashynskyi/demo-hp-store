import React from "react";
import styles from "./MenTShirtInfo.module.css";


const MenTShirtInfo = (props) => {
    return (
        <div className={styles.containerInfo}>
        <div>{props.productPrice} грн</div>
        <div>{props.productFirm} <span>/ {props.productType}</span></div>
        <div>Состав: <span>{props.productMaterial}</span></div>
        <div>Размеры (UKR):
          <span> {props.productSizes}</span>
        </div>
      </div>
    );
}

export default MenTShirtInfo;
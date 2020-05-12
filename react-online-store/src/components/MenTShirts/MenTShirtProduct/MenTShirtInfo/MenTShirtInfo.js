import React from "react";
import styles from "./MenTShirtInfo.module.css";


const MenTShirtInfo = (props) => {
    return (
        <div className={styles.containerInfo}>
        <div>{props.price}</div>
        <div>{props.firm} <span>/ {props.type}</span></div>
        <div>Состав: <span>{props.material}</span></div>
        <div>Размеры (UKR):
          <span> {props.sizes.size1}</span>
          <span> {props.sizes.size2}</span>
          <span> {props.sizes.size3}</span>
          <span> {props.sizes.size4}</span>
        </div>
      </div>
    );
}

export default MenTShirtInfo;
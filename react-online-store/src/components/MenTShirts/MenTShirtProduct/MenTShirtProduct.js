import React from "react";
import styles from "./MenTShirtProduct.module.css"
import man_photo_01 from "../../../assets/images/manTShirt_01_1.png";


const MenTShirtProduct = (props) => {
  return (
    <div className={styles.productsCatalog}>
      <div сlassName={styles.itemRow}>
        <div className={styles.item}>
          <div className={styles.containerPhoto}>
            <img className={styles.productPhoto} src={man_photo_01} alt="" />
          </div>
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
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenTShirtProduct;
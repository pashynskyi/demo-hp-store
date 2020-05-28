import React from "react";
import styles from "./MenTShirtProduct.module.css"
import MenTShirtPhoto from "./MenTShirtPhoto/MenTShirtPhoto";
import MenTShirtInfo from "./MenTShirtInfo/MenTShirtInfo";
import * as axios from 'axios';


const MenTShirtProduct = (props) => {

  return (
    <div className={styles.item}>
      <MenTShirtPhoto pictureUrl={props.pictureUrl} />
      <MenTShirtInfo
        productId={props.productId}
        productPrice={props.productPrice}
        productFirm={props.productFirm}
        productType={props.productType}
        productMaterial={props.productMaterial}
        productSizes={props.productSizes}
        pictureUrl={props.pictureUrl}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        selectSize={props.selectSize}
        selectedSize={props.selectedSize}
      />
    </div>
  );
}

export default MenTShirtProduct;
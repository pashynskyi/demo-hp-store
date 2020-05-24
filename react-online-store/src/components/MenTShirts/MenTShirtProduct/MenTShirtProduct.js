import React from "react";
import styles from "./MenTShirtProduct.module.css"
import MenTShirtPhoto from "./MenTShirtPhoto/MenTShirtPhoto";
import MenTShirtInfo from "./MenTShirtInfo/MenTShirtInfo";
import Button from 'react-bootstrap/Button';
import * as axios from 'axios';


const MenTShirtProduct = (props) => {
const onAddToCart = (props) => {
  return props.addToCart(props);
}
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
      />
      <div>
        <Button variant="success" onClick={() => onAddToCart(props)}>Добавить в корзину</Button>
      </div>
    </div>
  );
}

export default MenTShirtProduct;
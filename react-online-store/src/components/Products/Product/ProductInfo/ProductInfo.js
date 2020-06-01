import React from "react";
import styles from "./ProductInfo.module.css";
import FormSelectSize from "../../../../common/Form/FormSelectSize";


const ProductInfo = (props) => {

  let splitProductSizes = props.productSizes.split(', ');
  let newProductSizes = splitProductSizes.map((item, index) => (
    <option key={index} value={item}>{item}</option>
  ));

  return (
    <div className={styles.containerInfo}>
      <div>{props.productPrice} грн</div>
      <div>{props.productFirm} <span>/ {props.productType}</span></div>
      <div>Состав: <span>{props.productMaterial}</span></div>
      <FormSelectSize
        newProductSizes={newProductSizes}
        selectSize={props.selectSize}
        productId={props.productId}
        productPrice={props.productPrice}
        productFirm={props.productFirm}
        productType={props.productType}
        productMaterial={props.productMaterial}
        pictureUrl={props.pictureUrl}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        selectedSize={props.selectedSize}
        addQuantity={props.addQuantity} />
    </div>
  );
}

export default ProductInfo;
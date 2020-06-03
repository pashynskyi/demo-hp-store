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
      <div>{props.productDescription}</div>
      <div>Состав: <span>{props.productMaterial}</span></div>
      <FormSelectSize
        newProductSizes={newProductSizes}
        selectSize={props.selectSize}
        productId={props.productId}
        productPrice={props.productPrice}
        productDescription={props.productDescription}
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
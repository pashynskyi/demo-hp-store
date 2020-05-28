import React from "react";
import styles from "./Product.module.css"
import ProductPhoto from "./ProductPhoto/ProductPhoto";
import ProductInfo from "./ProductInfo/ProductInfo";

const Product = (props) => {

  return (
    <div className={styles.item}>
      <ProductPhoto pictureUrl={props.pictureUrl} />
      <ProductInfo
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

export default Product;
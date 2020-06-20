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
        productDescription={props.productDescription}
        productMaterial={props.productMaterial}
        productSizes={props.productSizes}
        pictureUrl={props.pictureUrl}
        selectSize={props.selectSize}
      />
    </div>
  );
}

export default Product;
import React from "react";
import styles from "./Product.module.css"
import ProductPhoto from "./ProductPhoto/ProductPhoto";
import ProductInfo from "./ProductInfo/ProductInfo";
import { NavLink } from "react-router-dom";

const Product = ({ product, setCurrentProduct, role }) => {
  const onSetProduct = () => {
    setCurrentProduct(product)
  }
  return (
    <div className={styles.item}>
      {role === "ROLE_ADMIN" &&
        <div className={styles.containerEdit}>
          <NavLink onClick={onSetProduct} to="/productEdit">Edit</NavLink>
          <div>Количество: {product.productStock}</div>
        </div>
      }
      <ProductPhoto pictureUrl={product.pictureUrl} />
      <ProductInfo
        productId={product.productId}
        productPrice={product.productPrice}
        productDescription={product.productDescription}
        productMaterial={product.productMaterial}
        productSizes={product.productSizes}
        pictureUrl={product.pictureUrl}
        selectSize={product.selectSize}
      />
    </div>
  );
}

export default Product;
import React from 'react';
import styles from './Product.module.css'
import ProductPhoto from './ProductPhoto/ProductPhoto';
import ProductInfo from './ProductInfo/ProductInfo';
import { NavLink } from 'react-router-dom';

const Product = ({ product, setCurrentProduct, role, deleteProduct }) => {
  const onSetProduct = () => {
    setCurrentProduct(product)
  }

  const onDeteteProduct = () => {
    deleteProduct(product.productId)
  }

  return (
    <div className={styles.item}>
      {role === "ROLE_ADMIN" &&
        <div className={styles.containerEditProduct}>
          <NavLink to="/productEdit" onClick={onSetProduct} >Edit</NavLink>
          <div className={styles.deteleProduct} onClick={onDeteteProduct} >Delete</div>
          <div>Количество:&nbsp;{product.productStock}</div>
        </div>}
      <ProductPhoto
        pictureUrl={product.pictureUrl}
        pictureUrl2={product.pictureUrl2}
        productStatus={product.productStatus}
        productDiscount={product.productDiscount}
      />
      <ProductInfo
        productId={product.productId}
        productPrice={product.productPrice}
        productFinalPrice={product.productFinalPrice}
        productDiscount={product.productDiscount}
        productDescription={product.productDescription}
        productMaterial={product.productMaterial}
        productSizes={product.productSizes}
        pictureUrl={product.pictureUrl}
        selectSize={product.selectSize}
        productStatus={product.productStatus}
      />
    </div>
  );
}

export default Product;
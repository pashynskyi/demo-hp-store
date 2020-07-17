import React from 'react';
import styles from './ProductPhoto.module.css';
import RevealProductPhoto from '../../../RevealProductPhoto/RevealProductPhoto';

const ProductPhoto = ({ pictureUrl, pictureUrl2, productStatus, productDiscount }) => {
  return (
    <div className={styles.containerPhoto}>
      <RevealProductPhoto
        pictureUrl={pictureUrl}
        pictureUrl2={pictureUrl2}
        productDiscount={productDiscount}
      />
      {productStatus === 0 && <div className={styles.disabledContainer}>
        <div>Нет в наличии</div>
      </div>}
    </div>
  );
}

export default ProductPhoto;
import React from 'react';
import styles from './ProductProfilePhotos.module.css';
import ProductPhotoModal from '../../ProductPhotoModal/ProductPhotoModal';

const ProductProfilePhotos = ({ pictureUrl, pictureUrl2, pictureUrl3 }) => {
  return (
    <React.Fragment>
      <div className={styles.bgPhotoContainer}>
        <img src={pictureUrl} alt='productPhoto' />
        <div className={styles.containerModal}>
          <ProductPhotoModal pictureUrl={pictureUrl} />
        </div>
      </div>
      <div className={styles.smPhotosContainer}>
        <div className={styles.smPhotoBox}>
          <img src={pictureUrl2} alt='productPhoto' />
          <div className={styles.containerModal2}>
            <ProductPhotoModal pictureUrl={pictureUrl2} />
          </div>
        </div>
        <div className={styles.smPhotoBox}>
          <img src={pictureUrl3} alt='productPhoto' />
          <div className={styles.containerModal2}>
            <ProductPhotoModal pictureUrl={pictureUrl3} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductProfilePhotos;
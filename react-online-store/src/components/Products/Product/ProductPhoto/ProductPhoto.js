import React from 'react';
import styles from './ProductPhoto.module.css';
import ProductPhotoModal from '../../../ProductPhotoModal/ProductPhotoModal';
import RevealProductPhoto from '../../../RevealProductPhoto/RevealProductPhoto';

const ProductPhoto = ({ pictureUrl, pictureUrl2, productStatus }) => {
    return (
        <div className={styles.containerPhoto}>
            {/* <img className={styles.productPhoto} src={pictureUrl} alt="" /> */}
            <RevealProductPhoto pictureUrl={pictureUrl} pictureUrl2={pictureUrl2} />
            {/* <div className={styles.containerModal}>
                <ProductPhotoModal pictureUrl={props.pictureUrl} />
            </div> */}
            {productStatus === 0 && <div className={styles.disabledContainer}>
                <div>Нет в наличии</div>
            </div>}
        </div>
    );
}

export default ProductPhoto;
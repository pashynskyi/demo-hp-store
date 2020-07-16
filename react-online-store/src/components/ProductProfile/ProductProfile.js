import React from 'react';
import styles from './ProductProfile.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import SelectSizeContainer from '../SelectSize/SelectSizeContainer';
import ProductButtonContainer from '../../common/Button/ProductButton/ProductButtonContainer';

const ProductProfile = ({ selectedProduct }) => {
  console.log(selectedProduct);
  const splitProductSizes = selectedProduct.productSizes.split(', ');

  return (
    <div>
      <Container>
        <Row className={styles.row}>
          <Col className={styles.productPhotosContainer} xs="12" sm="12" md="12" lg="6" >
            <div className={styles.bgPhotoContainer}>
              <img src={selectedProduct.pictureUrl} alt='productPhoto' />
            </div>
            <div className={styles.smPhotoContainer}>
              <div>
                <img src={selectedProduct.pictureUrl2} alt='productPhoto' />
              </div>
              <div>
                <img src={selectedProduct.pictureUrl3} alt='productPhoto' />
              </div>
            </div>
          </Col>
          <Col className={styles.productInfoContainer} xs="12" sm="6">
            <h3 className={styles.productName}>
              {selectedProduct.productDescription}
            </h3>
            <div className={styles.productStock}>Есть в наличии</div>
            <div className={styles.priceContainer}>
              <div className={styles.oldPrice}>{selectedProduct.productPrice} грн</div>
              <div className={styles.newPrice}>{selectedProduct.productFinalPrice} грн</div>
            </div>
            <div className={styles.materialContainer}><b>Состав:&nbsp;</b>
              <span>{selectedProduct.productMaterial}</span>
            </div>
            <p className={styles.textContainer}>
              {selectedProduct.productShortInformation}
            </p>
            <div className={styles.sizeContainer}><b>Выберите размер:</b>
              <div className={styles.rowSize}>
                <SelectSizeContainer splitProductSizes={splitProductSizes} />
              </div>
            </div>
            <ProductButtonContainer
              productId={selectedProduct.productId}
              productPrice={selectedProduct.productPrice}
              productDescription={selectedProduct.productDescription}
              productMaterial={selectedProduct.productMaterial}
              pictureUrl={selectedProduct.pictureUrl}
              productStatus={selectedProduct.productStatus}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default ProductProfile;
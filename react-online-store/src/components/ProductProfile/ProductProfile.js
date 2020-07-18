import React from 'react';
import styles from './ProductProfile.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProductButtonContainer from '../../common/Button/ProductButton/ProductButtonContainer';
import ProductProfilePhotos from './ProductProfilePhotos/ProductProfilePhotos';
import ProductProfileInfo from './ProductProfileInfo/ProductProfileInfo';

const ProductProfile = ({ selectedProduct }) => {
  console.log(selectedProduct);
  return (
    <div>
      <Container>
        <Row className={styles.row}>
          <Col className={styles.productPhotosContainer} xs="12" sm="12" md="12" lg="6" >
            <ProductProfilePhotos
              pictureUrl={selectedProduct.pictureUrl}
              pictureUrl2={selectedProduct.pictureUrl2}
              pictureUrl3={selectedProduct.pictureUrl3}
            />
          </Col>
          <Col className={styles.productInfoContainer}>
            <ProductProfileInfo
              productDescription={selectedProduct.productDescription}
              productPrice={selectedProduct.productPrice}
              productFinalPrice={selectedProduct.productFinalPrice}
              productDiscount={selectedProduct.productDiscount}
              productMaterial={selectedProduct.productMaterial}
              productShortInformation={selectedProduct.productShortInformation}
              productSizes={selectedProduct.productSizes}
            />
            <ProductButtonContainer
              productId={selectedProduct.productId}
              productPrice={selectedProduct.productPrice}
              productFinalPrice={selectedProduct.productFinalPrice}
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
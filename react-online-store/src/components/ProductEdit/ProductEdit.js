import React from 'react';
import styles from './ProductEdit.module.css';
import { ProductEditReduxForm } from './ProductEditReduxForm/ProductEditReduxForm';
import { Container, Row, Col } from 'react-bootstrap';

const ProductEdit = ({ selectedProduct, onSubmit }) => {
  return (
    <div>
      <h2>Edit product</h2>
      <Container>
        <Row>
          <Col>
            <ProductEditReduxForm initialValues={selectedProduct} onSubmit={onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductEdit;
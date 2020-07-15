import React from 'react';
import styles from './ProductEdit.module.css';
import { ProductEditReduxForm } from './ProductEditReduxForm/ProductEditReduxForm';
import { Container, Row, Col } from 'react-bootstrap';

const ProductEdit = ({ currentProduct, onSubmit }) => {
  return (
    <div>
      <h2>Редактирование товара</h2>
      <Container>
        <Row>
          <Col>
            <ProductEditReduxForm initialValues={currentProduct} onSubmit={onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductEdit;
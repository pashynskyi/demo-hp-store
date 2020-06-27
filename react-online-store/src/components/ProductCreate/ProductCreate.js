import React from "react";
import styles from "./ProductCreate.module.css";
import { ProductCreateReduxForm } from "./ProductCreateReduxForm/ProductCreateReduxForm";
import { Container, Row, Col } from "react-bootstrap";

const ProductCreate = ({ onSubmit, productCreate }) => {
  return (
    <div>
      <h2>Create product</h2>
      <Container>
        <Row>
          <Col>
            <ProductCreateReduxForm onSubmit={onSubmit} productCreate={productCreate} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductCreate;
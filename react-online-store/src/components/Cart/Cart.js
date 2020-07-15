import React from "react";
import styles from "./Cart.module.css";
import { Container, Row, Col } from "react-bootstrap";
import CartProductContainer from "./CartProduct/CartProductContainer";

const Cart = (props) => {
  return (
    <section>
      <h2>Корзина</h2>
      <Container>
        <Row>
          <Col>
            <CartProductContainer />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cart;
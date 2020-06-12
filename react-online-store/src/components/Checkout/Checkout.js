import React from "react";
import styles from "./Checkout.module.css";
import { CheckoutReduxForm } from "./CheckoutReduxForm/CheckoutReduxForm";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as axios from 'axios';
import { NavLink, Redirect } from "react-router-dom";

const Checkout = (props) => {

  const data = props.selectedItems[0];
  const products = data.obj;
  for (let i = 0; i < products.length; i++)
    delete products[i].productPrice;
  const totalPrice = data.totalPrice;

  const onSubmit = (quickOrderForm) => {
    // props.sendOrder(quickOrderForm, products);
    axios.post('http://localhost:8000/quickOrder', { products, quickOrderForm, totalPrice })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onResetOrder = () => {
    props.resetOrder();
  }

  if (!products) return <Redirect to="/cart" />;
  return (
    <div>
      <h2>Оформление заказа</h2>
      <Container className={styles.container}>
        <Row>
          <Col>
            <CheckoutReduxForm onSubmit={onSubmit} />
          </Col>
          <div className={styles.totalInfoContainer}>
            <div>
              <NavLink to="/cart" ><Button variant="danger" onClick={onResetOrder}>Отменить заказ</Button></NavLink>
            </div>
            <div className={styles.totalInfo}>
              <div>Общая сумма:&nbsp;<span className={styles.price}>{data.totalPrice}&nbsp;грн</span></div>
              <div>Количество товара:&nbsp;<span>{data.totalCount}</span></div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;


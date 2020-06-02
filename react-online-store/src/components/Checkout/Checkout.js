import React from "react";
import { CheckoutReduxForm } from "./CheckoutReduxForm/CheckoutReduxForm";
import { Container, Row, Col, Button } from "react-bootstrap";
import * as axios from 'axios';
import { NavLink } from "react-router-dom";

const Checkout = (props) => {

  const data = props.selectedItems[0];

  const onSubmit = (formData) => {
    props.sendOrder(formData, data);
    axios.post('http://localhost:8000/checkout', { formData, data })
      .then(response => {
        if (response.data.resultCode === 0) {
          console.log('success')
        }
      }).catch(console.log('fault'));
  }

  const onResetOrder = () => {
    props.resetOrder();
  }

  return (
    <div>
      <h1>Оформление заказа</h1>
      <Container>
        <Row>
          <Col>
            <CheckoutReduxForm onSubmit={onSubmit} />
          </Col>
          <div>
            <div><NavLink to="/cart" ><Button variant="danger" onClick={onResetOrder}>Отменить заказ</Button></NavLink></div>
            <div>Общая сумма: <span>{data.totalPrice} грн</span></div>
            <div>Количество товара: <span>{data.totalCount}</span></div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
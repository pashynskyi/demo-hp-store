import React from "react";
import { CheckoutReduxForm } from "./CheckoutReduxForm/CheckoutReduxForm";
import { Container, Row, Col } from "react-bootstrap";
import * as axios from 'axios';

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

  return (
    <div>
      <h1>Оформление заказа</h1>
      <Container>
        <Row>
          <Col>
            <CheckoutReduxForm onSubmit={onSubmit} />
          </Col>
          <div>
            <div>Общая сумма: <span>{data.totalPrice} грн</span></div>
            <div>Количество товара: <span>{data.totalCount}</span></div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Checkout;
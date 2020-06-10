import React from "react";
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
//   let iterator = products.entries();
//   const newObj = {};
//   for (let item of iterator) { // проходим циклом по объекту
    
//     console.log( item ); // выводим пары ключ/значение 
// }

  const onSubmit = (quickOrderForm) => {
    // props.sendOrder(quickOrderForm, products);
    axios.post('http://localhost:8000/quickOrder', {products, quickOrderForm, totalPrice} )
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


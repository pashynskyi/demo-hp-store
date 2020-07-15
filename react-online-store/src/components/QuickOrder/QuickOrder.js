import React from 'react';
import styles from './QuickOrder.module.css';
import { QuickOrderReduxForm } from './QuickOrderReduxForm/QuickOrderReduxForm';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import OrderResponseContainer from '../OrderResponse/OrderResponseContainer';

const QuickOrder = (props) => {
  const data = props.selectedItems[0];
  const products = data.obj;
  for (let i = 0; i < products.length; i++)
    delete products[i].productPrice;
  const totalPrice = data.totalPrice;

  const onSubmit = (quickOrderForm) => {
    props.onQuickOrder(products, quickOrderForm, totalPrice);
    // props.resetCart()
  }

  const onResetOrder = () => {
    // props.resetOrder();
    props.resetCart()
  }

  if (!products) return <Redirect to="/cart" />;
  return (
    <div>
      <h2>Оформление заказа</h2>
      <Container className={styles.container}>
        <Row>
          <Col>
            <QuickOrderReduxForm onSubmit={onSubmit} />
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
        <OrderResponseContainer />
      </Container>
    </div>
  );
}

export default QuickOrder;


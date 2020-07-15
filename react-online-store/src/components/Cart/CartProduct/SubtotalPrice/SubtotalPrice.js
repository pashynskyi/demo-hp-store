import React from 'react';
import styles from './SubtotalPrice.module.css';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import OrderResponseContainer from '../../../OrderResponse/OrderResponseContainer';

const SubtotalPrice = (props) => {
  const onСheckout = () => {
    props.orderProduct(props.totalPrice, props.totalCount, props.confirmedQuantityProducts);
    props.isAuth && props.postCheckout(props.token);
  }

  const onResetCart = () => {
    props.resetCart();
  }

  // if ((props.selectedItems.length >= 1) && props.isAuth) {
  //   return props.resetCart() && <Redirect to="/profile" />
  // } else if ((props.selectedItems.length >= 1) && !props.isAuth) {
  //   return <Redirect to="/quickOrder" />
  // }

  if ((props.selectedItems.length >= 1) && !props.isAuth) {
    return <Redirect to="/quickOrder" />
  }

  return (
    <div className={styles.subtotalPrice}>
      <div>ИТОГО:&nbsp;<span className={styles.totalPrice}>{props.totalPrice}&nbsp;грн</span></div>
      <div>Количество:&nbsp;<span>{props.totalCount}</span></div>
      {props.confirmedQuantityProducts.length >= 1 &&
        <div>
          <Button className={styles.cartBtn} variant="success" onClick={onСheckout}>Оформить заказ</Button>
          <Button className={styles.cartBtn} variant="danger" onClick={onResetCart}>Очистить корзину</Button>
        </div>
      }
      <OrderResponseContainer />
    </div>
  );
}

export default SubtotalPrice;
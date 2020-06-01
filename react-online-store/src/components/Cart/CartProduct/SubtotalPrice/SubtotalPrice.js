import React from "react";
import styles from "./SubtotalPrice.module.css";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const SubtotalPrice = (props) => {
  const onClickBtn = () => {
    props.orderProduct(props.totalPrice, props.totalCount, props.confirmedQuantityProducts);
  }

  if (props.selectedProducts.length >= 1) return <Redirect to="/checkout" />;

  return (
    <div className={styles.subtotalPrice}>
      <div>ИТОГО: <span>{props.totalPrice}</span></div>
      <div>Количество: <span>{props.totalCount}</span></div>
      {props.confirmedQuantityProducts.length >= 1 &&
        <Button variant="success" onClick={onClickBtn}>Оформить заказ</Button>
      }
    </div>
  );
}

export default SubtotalPrice;
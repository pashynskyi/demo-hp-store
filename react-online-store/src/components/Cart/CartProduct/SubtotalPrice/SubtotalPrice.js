import React from "react";
import styles from "./SubtotalPrice.module.css";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const SubtotalPrice = (props) => {
  const onClickBtn = () => {
    props.orderProduct(props.totalPrice, props.totalCount, props.confirmedQuantityProducts);
  }

  if (props.selectedItems.length >= 1) return <Redirect to="/quickOrder" />;

  return (
    <div className={styles.subtotalPrice}>
      <div>ИТОГО:&nbsp;<span className={styles.totalPrice}>{props.totalPrice}&nbsp;грн</span></div>
      <div>Количество:&nbsp;<span>{props.totalCount}</span></div>
      {props.confirmedQuantityProducts.length >= 1 &&
        <Button className={styles.cartBtn} variant="success" onClick={onClickBtn}>Оформить заказ</Button>
      }
    </div>
  );
}

export default SubtotalPrice;
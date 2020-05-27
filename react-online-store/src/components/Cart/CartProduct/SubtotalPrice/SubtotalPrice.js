import React from "react";
import styles from "./SubtotalPrice.module.css";
import { Button } from "react-bootstrap";

const SubtotalPrice = (props) => {
  const onClickBtn = () => {
    props.orderProduct(props.totalPrice, props.count, props.productId);
    console.log(props.totalPrice, props.count, props.productId)
  }
  return (
    <div className={styles.subtotalPrice}>
      <div>ИТОГО: <span>{props.totalPrice}</span></div>
      <div>Количество: <span>{props.count}</span></div>
      <Button variant="success" onClick={onClickBtn}>Купить</Button>
    </div>
  );
}

export default SubtotalPrice;
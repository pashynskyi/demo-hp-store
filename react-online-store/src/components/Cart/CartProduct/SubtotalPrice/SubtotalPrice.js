import React from "react";
import styles from "./SubtotalPrice.module.css";
import { Button } from "react-bootstrap";

const SubtotalPrice = (props) => {
  const onClickBtn = () => {
    props.orderProduct(props.totalPrice, props.totalCount, props.productId);
    console.log(props.totalPrice, props.totalCount, props.productId)
  }
  return (
    <div className={styles.subtotalPrice}>
      <div>ИТОГО: <span>{props.totalPrice}</span></div>
      <div>Количество: <span>{props.totalCount}</span></div>
      <Button variant="success" onClick={onClickBtn}>Купить</Button>
    </div>
  );
}

export default SubtotalPrice;
import React from "react";
import styles from "./SubtotalPrice.module.css";
import { Button } from "react-bootstrap";

const SubtotalPrice = (props) => {

    return (
        <div className={styles.subtotalPrice}>
            <div>ИТОГО: <span>{props.totalPrice}</span></div>
            <div>Количество: <span>{props.count}</span></div>
            <Button variant="success">Купить</Button>
        </div>
    );
}

export default SubtotalPrice;
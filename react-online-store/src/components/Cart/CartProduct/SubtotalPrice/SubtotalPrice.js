import React from "react";
import styles from "./SubtotalPrice.module.css";
import { Button } from "react-bootstrap";

const SubtotalPrice = (props) => {
    return (
        <div className={styles.subtotalPrice}>
            <div>ИТОГО: <span>499 грн</span></div>
            <Button variant="success">Купить</Button>
        </div>
    );
}

export default SubtotalPrice;
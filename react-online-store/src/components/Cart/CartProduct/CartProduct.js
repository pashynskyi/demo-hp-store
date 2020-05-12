import React from "react";
import styles from "./CartProduct.module.css";
import CartProductInfo from "./CartProductInfo/CartProductInfo";
import SubtotalPrice from "./SubtotalPrice/SubtotalPrice";


const ProductInCart = (props) => {
    console.log(props);
    return (
        <div className={styles.container}>
            <CartProductInfo />
            <SubtotalPrice />
        </div>
    );
}

export default ProductInCart;
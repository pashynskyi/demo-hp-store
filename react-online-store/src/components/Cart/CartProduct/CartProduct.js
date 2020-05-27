import React from "react";
import styles from "./CartProduct.module.css";
import CartProductInfo from "./CartProductInfo/CartProductInfo";
import SubtotalPrice from "./SubtotalPrice/SubtotalPrice";


const CartProduct = (props) => {

    let state = props.cartProducts;
    let productElements = state.map((p) => (
        <CartProductInfo
            key={p.productId}
            productId={p.productId}
            pictureUrl={p.pictureUrl}
            productPrice={p.productPrice}
            productFirm={p.productFirm}
            productType={p.productType}
            productMaterial={p.productMaterial}
            selectedSize={p.selectedSize}
             />
            
    ));

    return (
        <div className={styles.conteiner}>
            <div className={styles.productContainer}>
                {productElements}
            </div>
            <SubtotalPrice
                totalPrice={props.totalPrice}
                count={props.count}
                productId={props.cartProducts}
                orderProduct={props.orderProduct}
            />
        </div>

    );
}

export default CartProduct;
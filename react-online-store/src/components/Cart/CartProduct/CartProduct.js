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
      productDescription={p.productDescription}
      productMaterial={p.productMaterial}
      productSize={p.productSize}
      removeFromCart={props.removeFromCart}
      onDeleteFromAuthCart={props.onDeleteFromAuthCart}
    />
  ));

  return (
    <div className={styles.conteiner}>
      <div className={styles.productContainer}>
        {state.length < 1 &&
          <div className={styles.emptyCart}>Добавьте товар в корзину.</div>
        }
        {productElements}
      </div>
      <SubtotalPrice
        totalPrice={props.totalPrice}
        totalCount={props.totalCount}
        productId={props.cartProducts}
        orderProduct={props.orderProduct}
        confirmedQuantityProducts={props.confirmedQuantityProducts}
        selectedItems={props.selectedItems}
        isAuth={props.isAuth}
        resetCart={props.resetCart}
        postCheckout={props.postCheckout}
        token={props.token}
      />
    </div>
  );
}

export default CartProduct;
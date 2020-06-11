import React from "react";
import styles from "./CartProductInfo.module.css";
import CounterButton from "../../../../common/Button/CounterButton";


const CartProductInfo = (props) => {
  console.log(props)
  const onRemoveFromCart = () => {
    props.removeFromCart(props.productId);
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.photoContainer}>
        <img src={props.pictureUrl} alt='' />
      </div>
      <div className={styles.infoContainer}>
        <div>{props.productDescription}</div>
        <div>Состав: <span>{props.productMaterial}</span></div>
        <div>Размер: <span>{props.productSize}</span></div>
        <div>Цена: {props.productPrice} грн</div>
        <CounterButton
          productId={props.productId}
          productSize={props.productSize}
          productPrice={props.productPrice}
          addQuantity={props.addQuantity}
          subQuantity={props.subQuantity} />
      </div>
      <div>
        <span className={styles.removeFromCart} onClick={onRemoveFromCart}>&times;</span>
      </div>
    </div>
  );
}

export default CartProductInfo;

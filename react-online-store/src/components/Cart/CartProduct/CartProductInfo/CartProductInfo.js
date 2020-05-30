import React from "react";
import styles from "./CartProductInfo.module.css";
import CounterButton from "../../../../common/Button/CounterButton";


const CartProductInfo = (props) => {
  console.log(props)
  const onRemoveFromCart = () => {
    props.removeFromCart(props.productId);
    props.removeQuantity(props.productId, props.productSize, 1, 1);
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.photoContainer}>
        <img src={props.pictureUrl} alt='' />
      </div>
      <div className={styles.infoContainer}>
        <div>{props.productFirm}<span> / {props.productType}</span></div>
        <div>Состав: <span>{props.productMaterial}</span></div>
        <div>Размер: <span>{props.productSize}</span></div>
        <div>Цена: {props.productPrice} грн</div>
        <CounterButton
          productId={props.productId}
          productSize={props.productSize}
          productPrice={props.productPrice}
          addQuantity={props.addQuantity}
          removeQuantity={props.removeQuantity} />
      </div>
      <div>
        <span className={styles.removeFromCart} onClick={onRemoveFromCart}>X</span>
      </div>
    </div>
  );
}

export default CartProductInfo;

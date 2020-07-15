import React from 'react';
import styles from './CartProductInfo.module.css';
import CounterButtonContainer from '../../../../common/Button/CounterButton/CounterButtonContainer';


const CartProductInfo = (props) => {
  const onRemoveFromCart = () => {
    props.removeFromCart(props.productId);
    props.onDeleteFromAuthCart(props.productId);
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.photoContainer}>
        <img src={props.pictureUrl} alt='' />
      </div>
      <div className={styles.infoContainer}>
        <div>{props.productDescription}</div>
        <div>Состав:&nbsp;<span>{props.productMaterial}</span></div>
        <div>Размер:&nbsp;<span>{props.productSize}</span></div>
        <div>Цена:&nbsp;{props.productPrice} грн</div>
        <CounterButtonContainer
          productId={props.productId}
          productSize={props.productSize}
          productPrice={props.productPrice} />
      </div>
      <div>
        <span className={styles.removeFromCart} onClick={onRemoveFromCart}>&times;</span>
      </div>
    </div>
  );
}

export default CartProductInfo;

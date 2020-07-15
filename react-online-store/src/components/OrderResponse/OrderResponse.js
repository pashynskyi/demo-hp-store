import React, { Fragment } from 'react';
import styles from './OrderResponse.module.css'
import { Button, Icon } from 'semantic-ui-react';

const OrderResponse = ({ order, clearOrder, resetCart }) => {
  const onClearOrder = () => {
    clearOrder();
    resetCart();
  }
  return (
    <Fragment>
      {order &&
        <div className={styles.container}>
          <div className={styles.responseContainer}>
            <div className={styles.responseHeader}>
              <h3>Заказ успешно принят!</h3>
              <Icon name={'check circle outline'} size={'large'} color={'green'} />
            </div>
            <div>
              <h4>№ Заказа: {order.orderId}</h4>
              <p><b>{order.buyerName}</b>, спасибо что вы выбрали наш магазин!
              Мы отправили информацию о заказе на вашу почту.
            </p>
              <div className={styles.responseFooter}>
                <span><b>Дата оформления: </b>{order.createTime}</span>
                <Button inverted color='green' onClick={onClearOrder}>Продолжить</Button>
              </div>
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default OrderResponse;


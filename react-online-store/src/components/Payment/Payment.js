import React from 'react';
import styles from './Payment.module.css';

const Payment = () => {
  return (
    <div>
      <h2>Оплата</h2>
      <div className={styles.container}>
        <p>Вы можете оплатить заказ:</p>
        <ol>
          <li>Наличными курьеру или в пункте выдачи при получении заказа.</li>
          <li>Банковской картой Visa, Mastercard или МИР через сайт при оформлении заказа.</li>
          <li>Наложенным платежом при заказе с доставкой "Новая почта".</li>
        </ol>
      </div>
    </div>
  )
}

export default Payment;
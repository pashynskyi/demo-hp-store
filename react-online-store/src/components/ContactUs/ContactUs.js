import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div>
      <h2>Контакты</h2>
      <div className={styles.container}>
        <p>Вы можете найти нас по адресу: г. Киев, ул. Торговая, дом 123, офис 456.</p>
        <p>Как добраться: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.</p>
        <p>Телефоны отдела продаж: +380804626648, +380804626659</p>
        <p>
          <strong>График работы офиса и склада:</strong>
        </p>
        <table>
          <tbody>
            <tr>Понедельник	с 9:00 до 21:00</tr>
            <tr>Вторник	с 9:00 до 21:00</tr>
            <tr>Среда	с 9:00 до 21:00</tr>
            <tr>Четверг	с 9:00 до 21:00</tr>
            <tr>Пятница	с 9:00 до 21:00</tr>
            <tr>Суббота	с 10:00 до 20:00</tr>
            <tr>Воскресенье	с 10:00 до 20:00</tr>
          </tbody>
        </table>
        <p>
          Заказы через сайт принимаются круглосуточно!
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.4923898988923!2d30.52108076605876!3d50.45055502947539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce50f8b6e3c3%3A0xb528dc4d6dadc4f8!2z0JzQsNC50LTQsNC9INCd0LXQt9Cw0LvQtdC20L3QvtGB0YLRliwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1594559889329!5m2!1suk!2sua"
          title='map' width="100%" height="450" frameborder="0" style={{ border: 0 }}
          allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  )
}

export default ContactUs;
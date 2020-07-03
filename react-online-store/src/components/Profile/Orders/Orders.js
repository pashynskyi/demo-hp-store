import React from "react";
import styles from "./Orders.module.css";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Orders = ({ orders, setOrderDetails }) => {
 const onClickLink = (products) => {
   console.log("test1")
    setOrderDetails(products)
  }
  console.log("orders-->", orders);
  let OrdersElements = !orders ? 'Загрузка...'
    : orders.map((o) => (
      <tbody key={o.orderId}>
        <tr>
          <td>{o.orderId}</td>
          <td>{o.buyerName}</td>
          <td>{o.buyerEmail}</td>
          <td>{o.buyerPhone}</td>
          <td>{o.buyerAddress}</td>
          <td>{o.orderAmount}</td>
          <td>{o.createTime}</td>
          <td>{o.orderStatus === 0 ? "новый" : "завершенный"}</td>
          <td><NavLink to="/order" onClick={() => onClickLink(o.products)}>посмотреть</NavLink></td>
        </tr>
      </tbody>
    ));

  return (
    <>
      <Table className={styles.tableContainer} striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Имя&nbsp;покупателя</th>
            <th>Ел. почта</th>
            <th>Телефон</th>
            <th>Адрес</th>
            <th>Сумма&nbsp;(грн)</th>
            <th>Дата</th>
            <th>Статус</th>
            <th>Подробности</th>
          </tr>
        </thead>
        {OrdersElements}
      </Table>
    </>
  );
}

export default Orders;
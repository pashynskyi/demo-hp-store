import React from "react";
import styles from "./OrderDetails.module.css";
import { Table, Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const OrderDetails = (props) => {

  console.log(props.orderDetails);

  let order = props.orderDetails;
  const orderAmount = () => {
    let counter = 0;
    for (let i = 0; i < order.length; i++) {
      let totalPrice = (order[i].productPrice * order[i].count);
      counter += totalPrice;
    }
    return counter
  }

  let productsElements = !order ? 'Загрузка...'
    : order.map((p) => (
      <tbody key={p.productId}>
        <tr>
          <td className={styles.photoContainer}><img className={styles.productPhoto} src={p.pictureUrl} alt="фото продукта" /></td>
          <td>{p.productDescription}</td>
          <td>{p.productMaterial}</td>
          <td>{p.productSizes}</td>
          <td>{p.productPrice}</td>
          <td>{p.count}</td>
          <td>{p.count * p.productPrice}</td>
        </tr>
      </tbody>
    ));

    if (!order) return <Redirect to="/profile" />;

  return (
    <>
      <h2>Подробности заказа</h2>
      <Container fluid >
        <Row>
          <Col style={{ overflowY: "auto" }}>
            <Table className={styles.tableContainer} striped bordered hover>
              <thead>
                <tr>
                  <th>Фото</th>
                  <th>Название&nbsp;продукта</th>
                  <th>Состав</th>
                  <th>Размер</th>
                  <th>Цена&nbsp;(грн)</th>
                  <th>Количество&nbsp;(шт)</th>
                  <th>Cумма&nbsp;(грн)</th>
                </tr>
              </thead>
              {productsElements}
              <tfoot>
                <tr>
                  <td colSpan="2">
                    Общая сумма:&nbsp;{orderAmount()}&nbsp;грн
                  </td>
                </tr>
              </tfoot>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OrderDetails;
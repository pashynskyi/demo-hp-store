import React from "react";
import styles from "./MenTShirts.module.css";
import PortalList from "../PortalList/PortalList";
import PortalMenTypes from "../MenHome/PortalMenTypes/PortalMenTypes";
import MenTShirtProduct from "./MenTShirtProduct/MenTShirtProduct";
import { Container, Row, Col } from 'react-bootstrap';


const MenTShirts = (props) => {
  
  let state = props.products;
  let productElements = !props.isReady ? 'Загрузка...'
    : state.map((p) => (
      <Col xs="12" sm="6" md="4" lg="3" xl="3" key={p.productId}>
        <MenTShirtProduct
          productId={p.productId}
          pictureUrl={p.pictureUrl}
          productPrice={p.productPrice}
          productFirm={p.productFirm}
          productType={p.productType}
          productMaterial={p.productMaterial}
          productSizes={p.productSizes}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          // addedCount={props.addedCount}
        />
      </Col>
    ));
  return (
    <section>
      <PortalList />
      <PortalMenTypes />
      <Container>
        <Row>
          {productElements}
        </Row>
      </Container>
    </section>
  );
}

export default MenTShirts;

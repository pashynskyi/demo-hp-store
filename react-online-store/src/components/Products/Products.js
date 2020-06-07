import React from "react";
import styles from "./Products.module.css";
import PortalMenTypes from "../MenHome/PortalMenTypes/PortalMenTypes";
import Product from "./Product/Product";
import { Container, Row, Col } from 'react-bootstrap';
import PortalWomenTypes from "../WomenHome/PortalWomenTypes/PortalWomenTypes";
import FilterContainer from "../Filter/FilterContainer";


const Products = (props) => {
  let state = props.products;
  let productElements = !props.isReady ? 'Загрузка...'
    : state.map((p) => (
      <Col className={styles.productContainer} xs="12" sm="6" md="4" lg="4" xl="3" key={p.productId}>
        <Product
          productId={p.productId}
          pictureUrl={p.pictureUrl}
          productPrice={p.productPrice}
          productDescription={p.productDescription}
          productMaterial={p.productMaterial}
          productSizes={p.productSizes}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
          selectSize={props.selectSize}
          selectedSize={props.selectedSize}
          addQuantity={props.addQuantity}
        // addedCount={props.addedCount}
        />
      </Col>
    ));
  return (
    <section>
      {(props.isReady && state[0].categoryType === "men-home") &&
        <PortalMenTypes />
      }
      {(props.isReady && state[0].categoryType === "women-home") &&
        <PortalWomenTypes />
      }
      <Container>
        <FilterContainer />
        <Row>
          {productElements}
        </Row>
      </Container>
    </section>
  );
}

export default Products;

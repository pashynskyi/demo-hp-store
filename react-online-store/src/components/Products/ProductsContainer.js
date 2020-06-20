import React from "react";
import { connect } from 'react-redux';
import Products from './Products';
import { requestMenProducts, requestWomenProducts } from "../../redux/reducers/productsReducer";
import orderBy from "lodash/orderBy";
import { Spinner } from "react-bootstrap";

class ProductsContainer extends React.Component {

  componentDidMount() {
    if (this.props.location.pathname === '/collection/men-home/t-shirts') {
      this.props.requestMenProducts('t-shirts');
    } else if (this.props.location.pathname === '/collection/men-home/shirts') {
      this.props.requestMenProducts('shirts');
    } else if (this.props.location.pathname === '/collection/men-home/jeans') {
      this.props.requestMenProducts('jeans');
    } else if (this.props.location.pathname === '/collection/men-home/shorts') {
      this.props.requestMenProducts('shorts');
    } else if (this.props.location.pathname === '/collection/men-home/jackets') {
      this.props.requestMenProducts('jackets');
    } else if (this.props.location.pathname === '/collection/women-home/t-shirts') {
      this.props.requestWomenProducts('t-shirts');
    } else if (this.props.location.pathname === '/collection/women-home/shorts') {
      this.props.requestWomenProducts('shorts');
    } else if (this.props.location.pathname === '/collection/women-home/hoodies') {
      this.props.requestWomenProducts('hoodies');
    } else if (this.props.location.pathname === '/collection/women-home/skirts') {
      this.props.requestWomenProducts('skirts');
    } else if (this.props.location.pathname === '/collection/women-home/dresses') {
      this.props.requestWomenProducts('dresses');
    }

    // productsAPI.getMenTShirts().then(response => {
    //   this.props.setProducts(response);
    // });

    // axios.get('http://localhost:8000/collection/men-home/T-Shirts')
    //   .then(response => {
    //     this.props.setProducts(response.data);
    //   });
  }

  render() {
    return (
      !this.props.isReady ? <Spinner animation="border" /> :
        <Products products={this.props.products}
          isReady={this.props.isReady}
          selectSize={this.props.selectSize}
          selectedSize={this.props.selectedSize}
        />)
  }
}

const sortBy = (products, filterBy) => {
  switch (filterBy) {
    case 'all':
      return products;
    case 'price_high':
      return orderBy(products, 'productPrice', 'desc');
    case 'price_low':
      return orderBy(products, 'productPrice', 'asc');
    default:
      return products;
  }
}

let mapStateToProps = ({ productsPage }) => {
  return {
    products: sortBy(productsPage.products, productsPage.filterBy),
    isReady: productsPage.isReady,
    selectedSize: productsPage.selectedSize
  }
}

export default connect(mapStateToProps,
  {
    requestMenProducts,
    requestWomenProducts
  })(ProductsContainer);
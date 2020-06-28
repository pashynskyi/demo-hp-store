import React from "react";
import { connect } from 'react-redux';
import Products from './Products';
import {
  requestProducts,
  setCurrentProduct,
  resetSize,
  deleteCurrentProduct
} from "../../redux/reducers/productsReducer";
import orderBy from "lodash/orderBy";
import { Spinner } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { helperRequestProducts } from "../../utils/helperRequestProducts";

class ProductsContainer extends React.Component {

  deleteProduct = (productId) => {
    this.props.deleteCurrentProduct(productId, this.props.token)
  }

  componentDidMount() {
    helperRequestProducts(this.props.location.pathname, this.props.requestProducts)

    // productsAPI.getMenTShirts().then(response => {
    //   this.props.setProducts(response);
    // });

    // axios.get('http://localhost:8000/collection/men-home/T-Shirts')
    //   .then(response => {
    //     this.props.setProducts(response.data);
    //   });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isReady !== this.props.isReady) {
      console.log("TESTING!")
      helperRequestProducts(this.props.location.pathname, this.props.requestProducts)
    }
  }

  render() {
    return (
      !this.props.isReady ? <Spinner animation="border" /> :
        <Products
          products={this.props.products}
          isReady={this.props.isReady}
          setCurrentProduct={this.props.setCurrentProduct}
          role={this.props.role}
          resetSize={this.props.resetSize}
          deleteProduct={this.deleteProduct} />
    )
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

let mapStateToProps = ({ productsPage, loginPage }) => {
  return {
    products: sortBy(productsPage.products, productsPage.filterBy),
    isReady: productsPage.isReady,
    token: loginPage.currentUser.token,
    role: loginPage.currentUser.role
  }
}

export default connect(mapStateToProps,
  {
    requestProducts,
    setCurrentProduct,
    resetSize,
    deleteCurrentProduct
  })(ProductsContainer);
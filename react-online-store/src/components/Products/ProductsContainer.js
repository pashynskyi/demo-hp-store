import React from "react";
import { connect } from 'react-redux';
import Products from './Products';
import {
  requestProducts,
  setCurrentProduct,
  resetSize,
  deleteCurrentProduct,
  resetCurrentPage
} from "../../redux/reducers/productsReducer";
import { Spinner } from "react-bootstrap";
import { helperRequestProducts } from "../../utils/helperRequestProducts";

class ProductsContainer extends React.Component {

  deleteProduct = (productId) => {
    this.props.deleteCurrentProduct(productId, this.props.token)
  }

  componentDidMount() {
    if (this.props.currentPage !== 1) {
      helperRequestProducts(
        this.props.location.pathname,
        this.props.requestProducts,
        1,
        this.props.pageSize,
        this.props.sortBy
      );
      this.props.resetCurrentPage()
    } else {
      helperRequestProducts(
        this.props.location.pathname,
        this.props.requestProducts,
        this.props.currentPage,
        this.props.pageSize,
        this.props.sortBy
      )
    }
    // productsAPI.getMenTShirts().then(response => {
    //   this.props.setProducts(response);
    // });

    // axios.get('http://localhost:8000/collection/men-home/T-Shirts')
    //   .then(response => {
    //     this.props.setProducts(response.data);
    //   });
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (prevProps.isReady !== this.props.isReady || prevProps.currentPage !== this.props.currentPage) {
      helperRequestProducts(
        this.props.location.pathname,
        this.props.requestProducts,
        this.props.currentPage,
        this.props.pageSize,
        this.props.sortBy
      );
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
          deleteProduct={this.deleteProduct}
          locationPathname={this.props.location.pathname} />
    )
  }
}

let mapStateToProps = ({ productsPage, loginPage }) => {
  return {
    products: productsPage.products,
    isReady: productsPage.isReady,
    currentPage: productsPage.currentPage,
    totalPages: productsPage.totalPages,
    pageSize: productsPage.pageSize,
    sortBy: productsPage.sortBy,
    token: loginPage.currentUser.token,
    role: loginPage.currentUser.role
  }
}

export default connect(mapStateToProps,
  {
    requestProducts,
    setCurrentProduct,
    resetSize,
    deleteCurrentProduct,
    resetCurrentPage
  })(ProductsContainer);
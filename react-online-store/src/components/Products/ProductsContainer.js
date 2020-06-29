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
import orderBy from "lodash/orderBy";
import { Spinner } from "react-bootstrap";
import { helperRequestProducts } from "../../utils/helperRequestProducts";

class ProductsContainer extends React.Component {

  deleteProduct = (productId) => {
    this.props.deleteCurrentProduct(productId, this.props.token)
  }

  componentDidMount() {
    debugger;
    if (this.props.currentPage !== 1) {
      helperRequestProducts(
        this.props.location.pathname,
        this.props.requestProducts,
        1,
        this.props.pageSize
      );
      this.props.resetCurrentPage()
    } else {
      helperRequestProducts(
        this.props.location.pathname,
        this.props.requestProducts,
        this.props.currentPage,
        this.props.pageSize
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
      console.log("UPDATINGTEST!!!")//нужно чистить currentPage (redux)
      helperRequestProducts(
        this.props.location.pathname,
        this.props.requestProducts,
        this.props.currentPage,
        this.props.pageSize
      );
      // this.props.resetCurrentPage();
    }
  }

  render() {
    // if (this.props.isReady && this.props.totalPages !== 0) {
    //   debugger;
    //   this.props.resetCurrentPage();
    // }
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
    currentPage: productsPage.currentPage,
    totalPages: productsPage.totalPages,
    pageSize: productsPage.pageSize,
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
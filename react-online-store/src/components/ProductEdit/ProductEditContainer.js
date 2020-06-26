import React from "react";
import { connect } from 'react-redux';
import ProductEdit from './ProductEdit';
import { editCurrentProduct } from './../../redux/reducers/productsReducer';
import * as axios from 'axios';


class ProductEditContainer extends React.Component {

  onSubmit = (productEditData) => {
    this.props.editCurrentProduct(productEditData, this.props.token)
  }

  componentDidMount() {
  }

  render() {
    return <ProductEdit onSubmit={this.onSubmit} currentProduct={this.props.currentProduct} />
  }
}

let mapStateToProps = (state) => {
  return {
    currentProduct: state.productsPage.currentProduct,
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token
  }
}

export default connect(mapStateToProps, { editCurrentProduct })(ProductEditContainer);
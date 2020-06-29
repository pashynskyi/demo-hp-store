import React from "react";
import { connect } from 'react-redux';
import ProductEdit from './ProductEdit';
import { editCurrentProduct } from './../../redux/reducers/productsReducer';

class ProductEditContainer extends React.Component {

  goBack = this.goBack.bind(this);

  goBack() {
    this.props.history.goBack();
  }

  onSubmit = (productEditData) => {
    this.props.editCurrentProduct(productEditData, this.props.token)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isReady !== this.props.isReady) {
      this.goBack()
    }
  }

  render() {
    return <ProductEdit onSubmit={this.onSubmit} currentProduct={this.props.currentProduct} />
  }
}

let mapStateToProps = (state) => {
  return {
    currentProduct: state.productsPage.currentProduct,
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token,
    isReady: state.productsPage.isReady
  }
}

export default connect(mapStateToProps, { editCurrentProduct })(ProductEditContainer);
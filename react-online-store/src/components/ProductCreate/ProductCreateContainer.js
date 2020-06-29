import React from "react";
import { connect } from 'react-redux';
import ProductCreate from './ProductCreate';
import { createNewProduct } from './../../redux/reducers/productsReducer';

class ProductCreateContainer extends React.Component {

  goBack = this.goBack.bind(this);

  goBack() {
    this.props.history.goBack();
  }

  onSubmit = (productCreateData) => {
    this.props.createNewProduct(productCreateData, this.props.token)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isReady !== this.props.isReady) {
      this.goBack()
    }
  }

  render() {
    return <ProductCreate onSubmit={this.onSubmit} productCreate={this.props.productCreate} />
  }
}

let mapStateToProps = (state) => {
  return {
    productCreate: state.form.productCreate,
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token,
    isReady: state.productsPage.isReady,
  }
}

export default connect(mapStateToProps, { createNewProduct })(ProductCreateContainer);
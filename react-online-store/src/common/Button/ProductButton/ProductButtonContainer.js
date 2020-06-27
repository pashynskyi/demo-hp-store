import React from 'react';
import { connect } from 'react-redux';
import ProductButton from './ProductButton';
import { addToCart, removeFromCart, addQuantity } from '../../../redux/reducers/cartProductReducer';
import { resetSize } from '../../../redux/reducers/productsReducer';
import { cartAPI } from '../../../api/api';

class ProductButtonContainer extends React.Component {

  onAddToAuthCart = (productId, productSize) => {
    this.addToAuthCart.bind(this)(productId, productSize)
  }

  onDeleteFromAuthCart = (productId) => {
    this.deleteFromAuthCart.bind(this)(productId)
  }

  componentDidMount() {
    this.addToAuthCart = (productId, productSize) => {
      this.props.isAuth && cartAPI.postToCart(productId, productSize, this.props.token)
    };
    this.deleteFromAuthCart = (productId) => {
      this.props.isAuth && cartAPI.deleteFromCart(productId, this.props.token)
    }
  }

  render() {
    return <ProductButton {...this.props} onAddToAuthCart={this.onAddToAuthCart} onDeleteFromAuthCart={this.onDeleteFromAuthCart} />
  }
}

const mapStateToProps = (state) => {
  return {
    productSize: state.productsPage.productSize,
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token,
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart, addQuantity, resetSize })(ProductButtonContainer);
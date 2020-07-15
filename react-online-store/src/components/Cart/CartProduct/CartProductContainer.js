import React from 'react';
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import {
  addToCart,
  removeFromCart,
  resetCart,
  orderProduct
} from '../../../redux/reducers/cartProductReducer';
import { postCheckout } from '../../../redux/reducers/quickOrderReducer';
import { cartAPI } from '../../../api/api';

class CartProductContainer extends React.Component {

  onDeleteFromAuthCart = (productId) => {
    this.deleteFromAuthCart.bind(this)(productId)
  }

  componentDidMount() {
    this.props.isAuth && cartAPI.getCart(this.props.token);
    this.deleteFromAuthCart = (productId) => {
      this.props.isAuth && cartAPI.deleteFromCart(productId, this.props.token)
    };
  }
  render() {
    return <CartProduct
      cartProducts={this.props.cartProducts}
      totalPrice={this.props.totalPrice}
      totalCount={this.props.totalCount}
      removeFromCart={this.props.removeFromCart}
      orderProduct={this.props.orderProduct}
      confirmedQuantityProducts={this.props.confirmedQuantityProducts}
      selectedItems={this.props.selectedItems}
      isAuth={this.props.isAuth}
      resetCart={this.props.resetCart}
      onDeleteFromAuthCart={this.onDeleteFromAuthCart}
      postCheckout={this.props.postCheckout}
      token={this.props.token}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProductPage.items,
    totalPrice: state.cartProductPage.quantityItem.reduce((total, quantityItem) => (total + (quantityItem.productPrice * quantityItem.quantity - quantityItem.productPrice)),
      state.cartProductPage.items.reduce((total, item) => total + item.productPrice, 0)),
    totalCount: state.cartProductPage.items.length + (state.cartProductPage.quantityItem.reduce((total, quantityItem) => (total + quantityItem.quantity - 1), 0)),
    confirmedQuantityProducts: state.cartProductPage.quantityItem,
    selectedItems: state.cartProductPage.selectedItems,
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token,
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart, resetCart, orderProduct, postCheckout })(CartProductContainer);
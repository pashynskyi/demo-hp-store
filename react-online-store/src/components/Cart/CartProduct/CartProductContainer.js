import React from "react";
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import {
  addToCart,
  removeFromCart,
  orderProduct
} from "../../../redux/reducers/cartProductReducer";
import { cartAPI } from "../../../api/api";

class CartProductContainer extends React.Component {

  onDeleteFromAuthCart = (productId) => {
    this.deleteFromAuthCart.bind(this)(productId)
  }

  onPostCheckout = () => {
    this.postCheckout.bind(this)()
  }

  componentDidMount() {
    this.props.isAuth && cartAPI.getCart(this.props.token);
    this.deleteFromAuthCart = (productId) => {
      this.props.isAuth && cartAPI.deleteFromCart(productId, this.props.token)
    };
    this.postCheckout = () => {
      this.props.isAuth && cartAPI.postCheckout(this.props.token)
    }
    
  }
  render() {
    return <CartProduct
      cartProducts={this.props.cartProducts}
      totalPrice={this.props.totalPrice}
      totalCount={this.props.totalCount}
      addToCart={this.props.addToCart}
      removeFromCart={this.props.removeFromCart}
      orderProduct={this.props.orderProduct}
      confirmedQuantityProducts={this.props.confirmedQuantityProducts}
      selectedItems={this.props.selectedItems}
      onDeleteFromAuthCart={this.onDeleteFromAuthCart}
      onPostCheckout={this.onPostCheckout}
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
    token: state.loginPage.currentUser.token
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart, orderProduct })(CartProductContainer);
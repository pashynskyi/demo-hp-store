import React from "react";
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import {
  addToCart,
  removeFromCart,
  addQuantity,
  subQuantity,
  orderProduct
} from "../../../redux/reducers/cartProductReducer";

class CartProductContainer extends React.Component {
  componentDidMount() {
  }
  render() {
    return <CartProduct
      cartProducts={this.props.cartProducts}
      totalPrice={this.props.totalPrice}
      totalCount={this.props.totalCount}
      addToCart={this.props.addToCart}
      removeFromCart={this.props.removeFromCart}
      addQuantity={this.props.addQuantity}
      subQuantity={this.props.subQuantity}
      orderProduct={this.props.orderProduct}
      confirmedQuantityProducts={this.props.confirmedQuantityProducts}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProductPage.items,
    totalPrice: state.cartProductPage.quantityItem.reduce((total, quantityItem) => (total + (quantityItem.productPrice * quantityItem.quantity - quantityItem.productPrice)),
      state.cartProductPage.items.reduce((total, item) => total + item.productPrice, 0)),
    totalCount: state.cartProductPage.items.length + (state.cartProductPage.quantityItem.reduce((total, quantityItem) => (total + quantityItem.quantity - 1), 0)),
    confirmedQuantityProducts: state.cartProductPage.quantityItem
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart, addQuantity, subQuantity, orderProduct })(CartProductContainer);
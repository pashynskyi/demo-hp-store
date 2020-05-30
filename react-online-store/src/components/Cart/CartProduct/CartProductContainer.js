import React from "react";
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import { addToCart, removeFromCart, addQuantity, removeQuantity, orderProduct } from "../../../redux/reducers/cartProductReducer";

class CartProductContainer extends React.Component {
  componentDidMount() {
  }
  render() {
    debugger;
    return <CartProduct
      cartProducts={this.props.cartProducts}
      totalPrice={this.props.totalPrice}
      totalCount={this.props.totalCount}
      addToCart={this.props.addToCart}
      removeFromCart={this.props.removeFromCart}
      addQuantity={this.props.addQuantity}
      removeQuantity={this.props.removeQuantity}
      orderProduct={this.props.orderProduct} />
  }
}

let mapStateToProps = (state) => {
  return {
    cartProducts: state.cartProductPage.items,
    totalPrice: state.cartProductPage.items.reduce((total, item) => total + item.productPrice, 0),
    totalCount: state.cartProductPage.items.length
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart, addQuantity, removeQuantity, orderProduct })(CartProductContainer);
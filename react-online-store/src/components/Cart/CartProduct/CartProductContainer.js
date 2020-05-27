import React from "react";
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import {addToCart, orderProduct} from "../../../redux/reducers/cartProductReducer";

class CartProductContainer extends React.Component {
    componentDidMount() {
    }
    render() {
      return <CartProduct 
      cartProducts={this.props.cartProducts}
      totalPrice={this.props.totalPrice}
      count={this.props.count}
      orderProduct={this.props.orderProduct} />
    }
  }

let mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProductPage.items,
        totalPrice: state.cartProductPage.items.reduce((total, item) => total + item.productPrice, 0),
        count: state.cartProductPage.items.length
    }
}

export default connect(mapStateToProps, {addToCart, orderProduct})(CartProductContainer);
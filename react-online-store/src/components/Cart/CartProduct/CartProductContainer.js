import React from "react";
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import {addToCart} from "../../../redux/reducers/cartProductReducer";

let mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProductPage.items,
        totalPrice: state.cartProductPage.items.reduce((total, item) => total + item.productPrice, 0),
        count: state.cartProductPage.items.length
    }
}

export default connect(mapStateToProps, {addToCart})(CartProduct);
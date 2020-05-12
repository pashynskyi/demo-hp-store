import React from "react";
import { connect } from 'react-redux';
import CartProduct from './CartProduct';
import {addCartProductsAC} from "../../../redux/reducers/cartProductReducer";

debugger;
let mapStateToProps = (state) => {
    return {
        cartProducts: state.cartProductPage.cartProducts
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addCartProducts: (cartProducts) => {
            dispatch(addCartProductsAC(cartProducts))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
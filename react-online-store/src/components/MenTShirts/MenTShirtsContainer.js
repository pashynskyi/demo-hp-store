import React from "react";
import { connect } from 'react-redux';
import MenTShirts from './MenTShirts'
import {setProductsAC} from "../../redux/reducers/menTShirtsReducer";


let mapStateToProps = (state) => {

    return {
        products: state.menTShirtsPage.products
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setProducts: (products) => {
            dispatch(setProductsAC(products))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenTShirts);
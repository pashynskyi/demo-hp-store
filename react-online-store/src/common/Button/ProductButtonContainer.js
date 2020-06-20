import React from 'react';
import { connect } from 'react-redux';
import ProductButton from './ProductButton';
import { addToCart, removeFromCart, addQuantity } from '../../redux/reducers/cartProductReducer';
import * as axios from 'axios';
import { authAPI } from '../../api/api';

class ProductButtonContainer extends React.Component {

  onAddtoAuthCart = (productId, productSize) => {
    this.addToAuthCart.bind(this)(productId, productSize)
  }

  componentDidMount() {
    this.addToAuthCart = (productId, productSize) => {
      this.props.isAuth && authAPI.addToAuthCart(productId, productSize, this.props.token)
      // this.props.isAuth && axios.post('http://localhost:8000/cart/add', { productId: productId, productSize: productSize }, { headers: { "Authorization": `Bearer ${this.props.token}`} })
      //   .then(response => {
      //     console.log(response);
      //   })
    }
  }

  render() {
    return <ProductButton {...this.props} onAddtoAuthCart={this.onAddtoAuthCart} />
  }
}

const mapStateToProps = (state) => {
  return {
    productSize: state.productsPage.productSize,
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token,
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart, addQuantity })(ProductButtonContainer);
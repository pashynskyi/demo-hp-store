import React from "react";
import { connect } from 'react-redux';
import MenTShirts from './MenTShirts'
import { setProducts } from "../../redux/reducers/menTShirtsReducer";
import { addToCart } from "../../redux/reducers/cartProductReducer";
import * as axios from 'axios';

class MenTShirtContainer extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:8000/collection/men-home/T-Shirts')
      .then(response => {
        this.props.setProducts(response.data);
      });
  }
  render() {
    return <MenTShirts products={this.props.products}
      isReady={this.props.isReady}
      addToCart={this.props.addToCart}
      addedCount={this.props.addedCount} />
  }
}

let mapStateToProps = (state) => {
  debugger;
  return {
    products: state.menTShirtsPage.products,
    isReady: state.menTShirtsPage.isReady,
    // addedCount: state.cartProductPage.items.reduce(
    // (count, item) => count + (item.productId === productId ? 1 : 0), 0,
    //  ),
  }
}

export default connect(mapStateToProps, { setProducts, addToCart })(MenTShirtContainer);
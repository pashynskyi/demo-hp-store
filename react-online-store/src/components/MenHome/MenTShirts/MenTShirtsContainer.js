import React from "react";
import { connect } from 'react-redux';
import Products from '../../Products/Products';
import { selectSize, requestMenTShirts } from "../../../redux/reducers/productsReducer";
import { addToCart, removeFromCart, addQuantity } from "../../../redux/reducers/cartProductReducer";

class MenTShirtContainer extends React.Component {

  componentDidMount() {
    if (this.props.location.pathname === '/men-home/t-shirts') {
      this.props.requestMenTShirts();
    }

    // productsAPI.getMenTShirts().then(response => {
    //   this.props.setProducts(response);
    // });

    // axios.get('http://localhost:8000/collection/men-home/T-Shirts')
    //   .then(response => {
    //     this.props.setProducts(response.data);
    //   });
  }
  render() {
    return <Products products={this.props.products}
      isReady={this.props.isReady}
      addToCart={this.props.addToCart}
      removeFromCart={this.props.removeFromCart}
      selectSize={this.props.selectSize}
      selectedSize={this.props.selectedSize}
      addQuantity={this.props.addQuantity}
    // addedCount={this.props.addedCount}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    products: state.productsPage.products,
    isReady: state.productsPage.isReady,
    selectedSize: state.productsPage.selectedSize
    // addedCount: state.cartProductPage.items.reduce(
    // (count, item) => count + (item.productId === productId ? 1 : 0), 0,
    //  ),
  }
}

export default connect(mapStateToProps,
  {
    addToCart,
    removeFromCart,
    selectSize,
    addQuantity,
    requestMenTShirts
  })(MenTShirtContainer);
import React from "react";
import { connect } from 'react-redux';
import Checkout from './Checkout';
import { Redirect } from "react-router-dom";
import { sendOrder } from "../../redux/reducers/checkoutReducer";
import { resetOrder} from "../../redux/reducers/cartProductReducer";
import * as axios from 'axios';

class CheckoutContainer extends React.Component {
  componentDidMount() {
    // const order = this.props.order
    // if (order.length >= 1) {
    //   axios.post('http://localhost:8000/checkout', { order })
    //     .then(response => {
    //       if (response.data.resultCode === 0) {
    //         console.log('success')
    //       }
    //     }).catch(console.log('fault'));
  }

  render() {
    if (this.props.selectedItems.length < 1) return <Redirect to="/cart" />;
    return <Checkout
      selectedItems={this.props.selectedItems}
      sendOrder={this.props.sendOrder}
      order={this.props.order}
      resetOrder={this.props.resetOrder} />
  }
}

let mapStateToProps = (state) => {
  return {
    selectedItems: state.cartProductPage.selectedItems,
    order: state.checkoutPage.order
  }
}

export default connect(mapStateToProps, { sendOrder, resetOrder })(CheckoutContainer);
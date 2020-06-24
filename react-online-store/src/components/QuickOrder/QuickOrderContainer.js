import React from "react";
import { connect } from 'react-redux';
import QuickOrder from './QuickOrder';
import { Redirect } from "react-router-dom";
import { sendOrder, quickOrder } from "../../redux/reducers/quickOrderReducer";
import { resetOrder, resetCart } from "../../redux/reducers/cartProductReducer";

class QuickOrderContainer extends React.Component {

  onQuickOrder = (products, quickOrderForm, totalPrice) => {
    this.callback(products, quickOrderForm, totalPrice)
  }

  componentDidMount() {
    this.callback = (products, quickOrderForm, totalPrice) => {
      this.props.quickOrder(products, quickOrderForm, totalPrice)
    }
  }

  render() {
    if (this.props.selectedItems.length < 1) return <Redirect to="/cart" />;
    return <QuickOrder
      selectedItems={this.props.selectedItems}
      sendOrder={this.props.sendOrder}
      order={this.props.order}
      resetOrder={this.props.resetOrder}
      resetCart={this.props.resetCart}
      onQuickOrder={this.onQuickOrder} />
  }
}

let mapStateToProps = (state) => {
  return {
    selectedItems: state.cartProductPage.selectedItems,
    order: state.quickOrderPage.order
  }
}

export default connect(mapStateToProps, { sendOrder, resetOrder, quickOrder, resetCart })(QuickOrderContainer);
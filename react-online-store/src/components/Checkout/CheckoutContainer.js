import React from "react";
import { connect } from 'react-redux';
import Checkout from './Checkout';


class CheckoutContainer extends React.Component {
  componentDidMount() {
  }
  render() {
    return <Checkout />
  }
}
let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {})(CheckoutContainer);
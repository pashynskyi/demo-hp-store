import React from "react";
import { connect } from 'react-redux';
import Login from './Login';
import * as axios from 'axios';

class LoginContainer extends React.Component {
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
      return <Login email="email1@gmail.com" />
    }
  }
  
  let mapStateToProps = (state) => {
    return {
      selectedItems: state.cartProductPage.selectedItems,
      order: state.checkoutPage.order
    }
  }
  
  export default connect(mapStateToProps, {})(LoginContainer);
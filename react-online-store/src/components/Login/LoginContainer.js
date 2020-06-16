import React from "react";
import { connect } from 'react-redux';
import Login from './Login';
import { setUser } from '../../redux/reducers/userReducer';
import * as axios from 'axios';
import { Redirect } from "react-router-dom";

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
    if (this.props.currentUser !== '') return <Redirect to="/profile" />;
    return <Login setUser={this.props.setUser} currentUser={this.props.currentUser} />
  }
}

let mapStateToProps = (state) => {
  return {
    currentUser: state.userPage.currentUser
  }
}

export default connect(mapStateToProps, { setUser })(LoginContainer);
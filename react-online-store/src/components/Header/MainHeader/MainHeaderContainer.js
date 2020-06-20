import React from 'react';
import styles from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';
import MainHeader from './MainHeader';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { login } from './../../../redux/reducers/loginReducer';


class MainHeaderContainer extends React.Component {

  componentDidMount() {
    if (sessionStorage.email && sessionStorage.password) {
      this.props.login(sessionStorage.email, sessionStorage.password, sessionStorage.rememberMe)
    }
  }

  render() {
    return <MainHeader totalCount={this.props.totalCount} userName={this.props.userName} isAuth={this.props.isAuth} />
  }
}

let mapStateToProps = (state) => {
  return {
    totalCount: state.cartProductPage.items.length + (state.cartProductPage.quantityItem.reduce((total, quantityItem) => (total + quantityItem.quantity - 1), 0)),
    userName: state.loginPage.currentUser.name,
    isAuth: state.loginPage.isAuth
  }
}

export default connect(mapStateToProps, { login })(MainHeaderContainer);
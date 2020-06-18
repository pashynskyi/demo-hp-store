import React from 'react';
import styles from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';
import MainHeader from './MainHeader';
import { connect } from 'react-redux';

class MainHeaderContainer extends React.Component {
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

export default connect(mapStateToProps, {})(MainHeaderContainer);
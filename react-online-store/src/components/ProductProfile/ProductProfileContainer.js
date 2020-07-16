import React from 'react';
import { connect } from 'react-redux';
import ProductProfile from './ProductProfile';

class ProductProfileContainer extends React.Component {

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
  }

  render() {
    return <ProductProfile />
  }
}

let mapStateToProps = (state) => {
  return {
    currentUser: state.loginPage.currentUser,
    userProfile: state.profilePage.userProfile,
    orders: state.profilePage.orders,
    isAuth: state.loginPage.isAuth,
  }
}

export default connect(mapStateToProps, {})(ProductProfileContainer);
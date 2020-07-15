import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { Redirect } from 'react-router-dom';
import { setUserProfile, clearUserProfile, requestProfile, requestOrders, setOrderDetails } from '../../redux/reducers/profileReducer';
import { resetUser } from '../../redux/reducers/loginReducer';

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.isAuth && this.props.requestProfile(this.props.currentUser.email, this.props.currentUser.token);
    this.props.isAuth && this.props.requestOrders(this.props.currentUser.token);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.orders !== this.props.orders) {
      requestOrders(this.props.currentUser.token);
    }
  }

  render() {
    if (this.props.currentUser.length < 1) return <Redirect to="/login" />;
    return <Profile
      userProfile={this.props.userProfile}
      resetUser={this.props.resetUser}
      orders={this.props.orders}
      setOrderDetails={this.props.setOrderDetails}
      clearUserProfile={this.props.clearUserProfile}
    />
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

export default connect(mapStateToProps,
  {
    setUserProfile,
    clearUserProfile,
    requestProfile,
    requestOrders,
    resetUser,
    setOrderDetails
  })(ProfileContainer);
import React from 'react';
import MainHeader from './MainHeader';
import { connect } from 'react-redux';
import { login } from './../../../redux/reducers/loginReducer';


class MainHeaderContainer extends React.Component {

  componentDidMount() {
    if (localStorage.email && localStorage.password) {
      this.props.login(localStorage.email, localStorage.password, localStorage.rememberMe)
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
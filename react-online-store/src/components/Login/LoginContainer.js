import React from "react";
import { connect } from 'react-redux';
import Login from './Login';
import { setUser, login } from '../../redux/reducers/loginReducer';
import { Redirect } from "react-router-dom";

class LoginContainer extends React.Component {

  onSubmit = (loginData) => {
    this.onLogin(loginData)
  }

  componentDidMount() {
    this.onLogin = (loginData) => {
      this.props.login(loginData)
    }
  }

  render() {
    if (this.props.currentUser !== '') return <Redirect to="/profile" />;
    return <Login
      setUser={this.props.setUser}
      currentUser={this.props.currentUser}
      onSubmit={this.onSubmit} />
  }
}

let mapStateToProps = (state) => {
  return {
    currentUser: state.loginPage.currentUser
  }
}

export default connect(mapStateToProps, { setUser, login })(LoginContainer);
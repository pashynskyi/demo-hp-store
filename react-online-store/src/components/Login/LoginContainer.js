import React from "react";
import { connect } from 'react-redux';
import Login from './Login';
import { setUser, login } from '../../redux/reducers/loginReducer';
import { Redirect } from "react-router-dom";

class LoginContainer extends React.Component {

  onSubmit = ({ email, password, rememberMe = false }) => {
    this.onLogin(email, password, rememberMe);
    sessionStorage.setItem('rememberMe', rememberMe);
    sessionStorage.setItem('email', rememberMe ? email : '');
    sessionStorage.setItem('password', rememberMe ? password : '');
    alert(sessionStorage.email);
    alert(sessionStorage.password);
    alert(sessionStorage.rememberMe);
  }

  componentDidMount() {
    this.onLogin = (email, password, rememberMe) => {
      this.props.login(email, password, rememberMe);
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
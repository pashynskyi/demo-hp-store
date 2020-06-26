import React from "react";
import { connect } from 'react-redux';
import Login from './Login';
import { setUser, login } from '../../redux/reducers/loginReducer';
import { Redirect } from "react-router-dom";
import * as axios from 'axios';

class LoginContainer extends React.Component {

  onSubmit = ({ email, password, rememberMe = false }) => {
    this.onLogin(email, password, rememberMe);
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('email', rememberMe ? email : '');
    localStorage.setItem('password', rememberMe ? password : '');
    alert(localStorage.email);
    alert(localStorage.password);
    alert(localStorage.rememberMe);
  }

  componentDidMount() {
    this.onLogin = (email, password, rememberMe) => {
      this.props.login(email, password, rememberMe);
    }
  }

  // postTest = () => {
  //   debugger;
  //   axios.post(`http://localhost:8000/test3`,
  //    {email: this.props.form.values.email, password: this.props.form.values.password}, {withCredentials: true})
  //   .then(response => {
  //     console.log(response)
  //   });
  // }

  render() {
    if (this.props.currentUser !== '') return <Redirect to="/profile" />;
    return <Login
      setUser={this.props.setUser}
      currentUser={this.props.currentUser}
      onSubmit={this.onSubmit}
      // postTest={this.postTest}
       />
  }
}

let mapStateToProps = (state) => {
  return {
    currentUser: state.loginPage.currentUser,
    form: state.form.login
  }
}

export default connect(mapStateToProps, { setUser, login })(LoginContainer);
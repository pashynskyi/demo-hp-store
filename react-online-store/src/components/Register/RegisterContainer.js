import React from "react";
import { connect } from 'react-redux';
import Register from './Register';
import {registerUser} from './../../redux/reducers/registerReducer';
import { Redirect } from "react-router-dom";


class RegisterContainer extends React.Component {

  onSubmit = (registerData) => {
    this.onRegister(registerData)
  }

  componentDidMount() {
    this.onRegister = (registerData) => {
      this.props.registerUser(registerData)
    }
  }
  
    render() {
      if (this.props.isRegistered) return <Redirect to="/login" />;
      return <Register onSubmit={this.onSubmit} />
    }
  }
  
  let mapStateToProps = (state) => {
    return {
      isRegistered: state.registerPage.isRegistered
    }
  }
  
  export default connect(mapStateToProps, {registerUser})(RegisterContainer);
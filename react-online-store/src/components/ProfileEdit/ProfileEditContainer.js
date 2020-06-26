import React from "react";
import { connect } from 'react-redux';
import ProfileEdit from './ProfileEdit';
import { registerUser } from './../../redux/reducers/registerReducer';
import { editProfile } from './../../redux/reducers/profileReducer';
import { Redirect } from "react-router-dom";
import * as axios from 'axios';


class ProfileEditContainer extends React.Component {

  onSubmit = (profileEditData) => {
    this.props.editProfile(profileEditData, this.props.token);
    // setTimeout(() =>this.test.bind(this)(), 5000)
  }

  componentDidMount() {
    // this.test = () => {
    //   alert('testing2')
    //    axios.get(`http://localhost:8000/test/${this.props.userProfile.email}`)
    //     .then(response => {
    //       console.log(response)
    //     });
    // }
  }

  render() {
    // if (!this.props.isAuth) return <Redirect to="/login" />;
    return <ProfileEdit onSubmit={this.onSubmit} userProfile={this.props.userProfile} />
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token
  }
}

export default connect(mapStateToProps, { registerUser, editProfile })(ProfileEditContainer);
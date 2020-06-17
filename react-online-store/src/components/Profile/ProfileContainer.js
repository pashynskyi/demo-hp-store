import React from "react";
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { Redirect } from "react-router-dom";
import { profileAPI } from "../../api/api";
import {setUserProfile} from "../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {

  componentDidMount() {

    let webApiUrl = `http://localhost:8000/profile/${this.props.currentUser.account}`;
    let tokenStr = this.props.currentUser.token;

    axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`}})
    .then(response => {
      console.log(response);
      this.props.setUserProfile(response.data);
    })
    .catch(error => {
      console.log(error);
    });

    // profileAPI.getProfile(this.props.currentUser.account);
  }

  render() {
    if (this.props.currentUser.length < 1) return <Redirect to="/login" />;
    return <Profile currentUser={this.props.currentUser} userProfile={this.props.userProfile} />
  }
}

let mapStateToProps = (state) => {
  return {
    currentUser: state.loginPage.currentUser,
    userProfile: state.profilePage.userProfile
  }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
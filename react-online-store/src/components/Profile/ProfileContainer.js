import React from "react";
import { connect } from 'react-redux';
import Profile from './Profile';
import * as axios from 'axios';
import { Redirect } from "react-router-dom";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {

  componentDidMount() {

    let webApiUrl = `http://localhost:8000/profile/${this.props.currentUser.account}`;
    let tokenStr = this.props.currentUser.token;

    axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // profileAPI.getProfile(this.props.currentUser.account);
  }

  render() {
    if (this.props.currentUser.length < 1) return <Redirect to="/login" />;
    return <Profile currentUser={this.props.currentUser} />
  }
}

let mapStateToProps = (state) => {
  return {
    currentUser: state.userPage.currentUser
  }
}

export default connect(mapStateToProps, {})(ProfileContainer);
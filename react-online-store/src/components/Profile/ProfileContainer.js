import React from "react";
import { connect } from 'react-redux';
import Profile from './Profile';
import { Redirect } from "react-router-dom";
import {setUserProfile, requestProfile} from "../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.requestProfile(this.props.currentUser.email, this.props.currentUser.token);
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

export default connect(mapStateToProps, {setUserProfile, requestProfile})(ProfileContainer);
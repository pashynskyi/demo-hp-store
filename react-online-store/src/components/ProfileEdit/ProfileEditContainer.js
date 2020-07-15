import React from 'react';
import { connect } from 'react-redux';
import ProfileEdit from './ProfileEdit';
import { registerUser } from './../../redux/reducers/registerReducer';
import { editProfile } from './../../redux/reducers/profileReducer';

class ProfileEditContainer extends React.Component {

  onSubmit = (profileEditData) => {
    this.props.editProfile(profileEditData, this.props.token);
  }

  render() {
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
import React from 'react';
import styles from './ProfileEdit.module.css';
import { ProfileEditReduxForm } from './ProfileEditReduxForm/ProfileEditReduxForm';
import { Container, Row, Col } from 'react-bootstrap';

const ProfileEdit = ({ userProfile, onSubmit }) => {
  return (
    <div>
      <h2>Редактирование профиля</h2>
      <Container>
        <Row>
          <Col>
            <ProfileEditReduxForm initialValues={userProfile} userProfile={userProfile} onSubmit={onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfileEdit;
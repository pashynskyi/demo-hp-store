import React from "react";
import styles from "./Profile.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Profile = ({ userProfile, resetUser }) => {

  const onResetUser = () => {
    resetUser();
    delete localStorage.rememberMe;
    delete localStorage.email;
    delete localStorage.password;
  }

  return (
    <div>
      <h2>Профиль</h2>
      <Container className={styles.container}>
        <Row>
          <Col>
            <div>Имя и фамилия:&nbsp;<span>{userProfile.name}</span></div>
            <div>Логин:&nbsp;<span>{userProfile.email}</span></div>
            <div>Мобильный телефон:&nbsp;<span>{userProfile.phone}</span></div>
            <div>Город:&nbsp;<span>{userProfile.city}</span></div>
            <div>Адрес:&nbsp;<span>{userProfile.address}</span></div>
            <Button variant="danger" onClick={onResetUser}>Выйти из профиля</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
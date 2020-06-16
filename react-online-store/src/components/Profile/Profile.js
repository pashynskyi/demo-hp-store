import React from "react";
import styles from "./Profile.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Profile = ({currentUser}) => {
  console.log(currentUser);
  return (
    <div>
      <h2>Профиль</h2>
      <Container className={styles.container}>
        <Row>
          <Col>
            <div>Hello world!</div>
            <div>{currentUser.name}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
import React from "react";
import styles from "./Profile.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Orders from "./Orders/Orders";

const Profile = ({ userProfile, resetUser, orders, setOrderDetails }) => {
  debugger;
  return (
    <div>
      <h2>Профиль</h2>
      <Container fluid>
        <Row>
          <Col>
            <ProfileInfo userProfile={userProfile} resetUser={resetUser} />
          </Col>
        </Row>
      </Container>
      <h2>История заказов</h2>
      <Container fluid>
        <Row>
          <Col style={{ overflowY: "auto" }}>
            <Orders orders={orders} setOrderDetails={setOrderDetails} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
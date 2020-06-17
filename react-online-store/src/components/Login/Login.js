import React from "react";
import styles from "./Login.module.css";
import { LoginReduxForm } from "./LoginReduxForm/LoginReduxForm";
import { Container, Row, Col } from "react-bootstrap";
import * as axios from 'axios';
import { NavLink, Redirect } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (login) => {
    // props.sendOrder(quickOrderForm, products);
    axios.post('http://localhost:8000/login', { ...login })
      .then(response => {
        console.log(response);
        console.log(response.data.token);
        props.setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // if(!props.currentUser === {}) return <Redirect to="/profile" />;

  return (
    <div>
      <h2>Авторизация</h2>
      <Container className={styles.container}>
        <Row>
          <Col>
            <LoginReduxForm onSubmit={onSubmit} />
            <div>
              <NavLink to="/register">Зарегистрироваться</NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
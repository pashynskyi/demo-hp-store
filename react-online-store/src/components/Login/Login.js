import React from 'react';
import styles from './Login.module.css';
import { LoginReduxForm } from './LoginReduxForm/LoginReduxForm';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
  return (
    <div>
      <h2>Авторизация</h2>
      <Container className={styles.container}>
        <Row>
          <Col>
            <LoginReduxForm onSubmit={props.onSubmit} />
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
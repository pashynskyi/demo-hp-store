import React from "react";
import styles from "./Register.module.css";
import { RegisterReduxForm } from "./RegisterReduxForm/RegisterReduxForm";
import { Container, Row, Col} from "react-bootstrap";
import * as axios from 'axios';

const Register = (props) => {
  const onSubmit = (register) => {
    // props.sendOrder(quickOrderForm, products);
    axios.post('http://localhost:8000/register', { ...register })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>Регистрация</h2>
      <Container className={styles.container}>
        <Row>
          <Col>
            <RegisterReduxForm onSubmit={onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
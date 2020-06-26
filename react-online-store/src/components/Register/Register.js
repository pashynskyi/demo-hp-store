import React from "react";
import styles from "./Register.module.css";
import { RegisterReduxForm } from "./RegisterReduxForm/RegisterReduxForm";
import { Container, Row, Col} from "react-bootstrap";

const Register = (props) => {
  return (
    <div>
      <h2>Регистрация</h2>
      <Container>
        <Row>
          <Col>
            <RegisterReduxForm onSubmit={props.onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
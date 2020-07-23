import React from 'react';
import styles from './NewsCreate.module.css';
import { NewsCreateReduxForm } from './NewsCreateReduxForm/NewsCreateReduxForm';
import { Container, Row, Col } from 'react-bootstrap';

const NewsCreate = ({ onSubmit }) => {
  return (
    <div>
      <h2>Create news</h2>
      <Container>
        <Row>
          <Col>
            <NewsCreateReduxForm onSubmit={onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsCreate;
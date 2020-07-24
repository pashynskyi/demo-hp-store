import React from 'react';
import styles from './NewsEdit.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { NewsEditReduxForm } from './NewsEditReduxForm/NewsEditReduxForm';

const NewsEdit = ({ selectedNews, onSubmit }) => {
  return (
    <div>
      <h2>Edit news</h2>
      <Container>
        <Row>
          <Col>
            <NewsEditReduxForm initialValues={selectedNews} onSubmit={onSubmit} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewsEdit;
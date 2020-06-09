import React from 'react';
import styles from './Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <Row>
          <Col className={styles.titleBox} xs="12" sm="6" md="3" lg="3" xl="3">
            <Icon name="truck" size='large' />
            <div className={styles.title}>Доставка по всей Украине</div>
          </Col>
          <Col className={styles.titleBox} xs="12" sm="6" md="3" lg="3" xl="3">
            <Icon name="sync" size='large' />
            <div className={styles.title}>Бесплатный возрат товара</div>
          </Col>
          <Col className={styles.titleBox} xs="12" sm="6" md="3" lg="3" xl="3">
            <Icon name="thumbs up" size='large' />
            <div className={styles.title}>Гарантия качества товара</div>
          </Col>
          <Col className={styles.titleBox} xs="12" sm="6" md="3" lg="3" xl="3">
            <Icon name="eye" size='large' />
            <div className={styles.title}>Безопасная и надежная проверка</div>
          </Col>
        </Row>
        <Row>
          <Col className={styles.titleBox} xs="3">
            <Icon name="telegram plane" size='big' />
          </Col>
          <Col className={styles.titleBox} xs="3">
            <Icon name="instagram" size='big' />
          </Col>
          <Col className={styles.titleBox} xs="3">
            <Icon name="facebook official" size='big' />
          </Col>
          <Col className={styles.titleBox} xs="3">
            <Icon name="viber" size='big' />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
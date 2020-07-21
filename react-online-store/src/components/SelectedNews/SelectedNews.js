import React from 'react';
import styles from './SelectedNews.module.css'
import { Container, Row, Col } from 'react-bootstrap';

const SelectedNews = ({ selectedNews }) => {
  console.log(selectedNews)
  return (
    <div>
      <Container>
        <Row>
          <Col sm='12'>
            <div className={styles.pictureContainer}>
              <img src={selectedNews.pictureUrl} alt='pictureNews' />
            </div>
            <h3 className={styles.title}>{selectedNews.paragraph}</h3>
            <p className={styles.subTitle}>
              {selectedNews.paragraphText}
            </p>
            <div className={styles.pictureContainer} >
              <img src={selectedNews.pictureUrl2} alt='pictureNews' />
            </div>
            <p className={styles.subTitle}>
              {selectedNews.otherText}
            </p>
            <div className={styles.pictureContainer} >
              <img src={selectedNews.pictureUrl3} alt='pictureNews' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SelectedNews;
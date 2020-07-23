import React from 'react';
import styles from './News.module.css';
import { Container, Row, Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const News = ({ news, role }) => {
  console.log(news)
  const newsElements = news.map((news) => (
    <Row className={styles.row} key={news.newsId}>
      <Col xs="12" sm="12" md="6" >
        <div className={styles.pictureContainer}>
          <img src={news.pictureUrl} alt='pictureNews' />
        </div>
      </Col>
      <Col xs="12" sm="12" md="6" >
        <div className={styles.infoContainer}>
          <h3 className={styles.title}>
            {news.title}
          </h3>
          <p>
            {news.subtitle}
          </p>
          <NavLink to={`/news/${news.newsId}`} >
            ЧИТАТЬ ПОЛНУЮ СТАТЬЮ &gt;&gt;
          </NavLink>
        </div>
      </Col>
    </Row>
  ));
  return (
    <Container>
      {role === "ROLE_ADMIN" &&
        <div className={styles.containerAddNews}>
          <NavLink to="/newsCreate">Добавить новость</NavLink>
        </div>
      }
      {newsElements}
    </Container>
  )
}

export default News;
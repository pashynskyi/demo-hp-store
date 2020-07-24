import React from 'react';
import styles from './SelectedNews.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';

const SelectedNews = ({ selectedNews, deleteSelectedNews, role }) => {

  const onDeleteNews = () => {
    deleteSelectedNews(selectedNews.newsId)
  };

  if (!selectedNews) return <Redirect to="/news"></Redirect>;

  return (
    <div>
      <Container>
        <Row>
          <Col sm='12'>
            {role === "ROLE_ADMIN" &&
              <div className={styles.containerEditNews}>
                <NavLink to="/newsEdit" >Edit</NavLink>
                <div className={styles.deteleNews} onClick={onDeleteNews} >Delete</div>
              </div>
            }
            <div className={`${styles.pictureContainer} ${styles.mainPicture}`}>
              <img src={selectedNews.mainPictureUrl} alt='pictureNews' />
            </div>
            <h3 className={styles.title}>{selectedNews.title}</h3>
            <p className={styles.subTitle}>
              {selectedNews.subtitle}
            </p>
            <div className={styles.groupPhoto}>
              <div className={styles.pictureContainer} >
                <img src={selectedNews.pictureUrl2} alt='pictureNews' />
              </div>
              <div className={styles.pictureContainer} >
                <img src={selectedNews.pictureUrl3} alt='pictureNews' />
              </div>
            </div>
            <p className={styles.subTitle}>
              {selectedNews.text}
            </p>
            <div className={styles.groupPhoto}>
              <div className={styles.pictureContainer} >
                <img src={selectedNews.pictureUrl4} alt='pictureNews' />
              </div>
              <div className={styles.pictureContainer} >
                <img src={selectedNews.pictureUrl5} alt='pictureNews' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SelectedNews;
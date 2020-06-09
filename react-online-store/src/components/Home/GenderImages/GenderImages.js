import React from 'react';
import styles from './GenderImages.module.css';
import manPhoto from '../../../assets/images/manPhoto.jpg';
import womanPhoto from '../../../assets/images/womanPhoto.jpg';
import kidPhoto from '../../../assets/images/kidPhoto.jpg';
import { NavLink } from 'react-router-dom';

const GenderImages = () => {
  return (
    <div>
      <h2>Выбирите интересующий вас раздел</h2>
      <div className={styles.container}>
        <NavLink to="/men-home">
          <div className={styles.genderBox}>
            <img src={manPhoto} alt="manPhoto" />
            <div className={styles.photoTitle}>Мужчинам</div>
          </div>
        </NavLink>
        <NavLink to="/women-home">
          <div className={styles.genderBox}>
            <img src={womanPhoto} alt="womanPhoto" />
            <div className={styles.photoTitle}>Женщинам</div>
          </div>
        </NavLink>
        <NavLink to="/kids-home">
          <div className={styles.genderBox}>
            <img src={kidPhoto} alt="kidPhoto" />
            <div className={styles.photoTitle}>Детям</div>
          </div>
        </NavLink>
      </div>
    </div>

  );
}

export default GenderImages;
import React from 'react';
import styles from './GenderImages.module.css';
import manPhoto from '../../../assets/images/manPhoto.jpg';

const GenderImages = () => {
    return (
        <div>
            <h2>Выбирите интересующий вас раздел</h2>
            <div className={styles.container}>
                <div className={styles.genderBox}>
                    <img src={manPhoto} alt="" />
                </div>
                <div className={styles.genderBox}>
                    <img src={manPhoto} alt="" />
                </div>
                <div className={styles.genderBox}>
                    <img src={manPhoto} alt="" />
                </div>
            </div>
        </div>

    );
}

export default GenderImages;
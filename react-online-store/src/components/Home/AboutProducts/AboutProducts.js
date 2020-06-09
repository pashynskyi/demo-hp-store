import React from 'react';
import styles from './AboutProducts.module.css';
import { Button } from 'react-bootstrap';



const AboutProducts = () => {
	return (
		<div className={styles.aboutProducts}>
			<h2>Информация о нашем товаре</h2>
			<div className={styles.container}>
				<div className={styles.photoContainer}>
					<img src="https://static-eu.insales.ru/files/1/6132/9803764/original/26_1f4ba115-a4bb-4b9c-8755-e7855d528a7a_627x.progressive.png.jpg" alt="productPhoto" />
					<div className={styles.btnContainer}>
						<Button variant="secondary">Посмотреть</Button>
					</div>
				</div>
				<div className={styles.textContainer}>
					В нашей одежде приятно ходить в любую погоду. Она будет защищать вас от погодных условий.
					А также она поднимает настроение мягкостью матералов и приятным цветом.
					Никто не останеться равнодушным к нашей одежде.
				</div>
			</div>
			<div className={`${styles.container} ${styles.lastContainer}`}>
				<div className={styles.textContainer}>
					В нашей одежде приятно ходить в любую погоду. Она будет защищать вас от погодных условий.
					А также она поднимает настроение мягкостью матералов и приятным цветом.
					Никто не останеться равнодушным к нашей одежде.
				</div>
				<div className={styles.photoContainer}>
					<img src="https://static-eu.insales.ru/files/1/6135/9803767/original/27_57dea860-0074-4e74-af8c-cf2e8fd3b542_627x.progressive.png.jpg" alt="productPhoto" />
					<div className={styles.btnContainer}>
						<Button variant="secondary">Посмотреть</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutProducts;
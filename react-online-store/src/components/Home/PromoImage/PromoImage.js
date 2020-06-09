import React from 'react';
import styles from './PromoImage.module.css';
import { Carousel, Button } from 'react-bootstrap';

const PromoImage = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static-eu.insales.ru/files/1/5072/9802704/original/home1_02_4c388999-0b9a-4a73-9fe7-1ca465ec8140_x1024.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <Button variant="secondary">Посмотреть</Button>
          <h3>First slide</h3>
          <p>Новая коллекция весна 2020!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static-eu.insales.ru/files/1/5074/9802706/original/home1_01_9e9ee306-65ab-4e2e-9a19-c54fa8039f8a_x1024.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Button variant="secondary">Посмотреть</Button>
          <h3>Second slide</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static-eu.insales.ru/files/1/5072/9802704/original/home1_02_4c388999-0b9a-4a73-9fe7-1ca465ec8140_x1024.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Button variant="secondary">Посмотреть</Button>
          <h3>Third slide</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PromoImage;
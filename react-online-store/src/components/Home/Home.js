import React from 'react';
import styles from './Home.module.css';
import PromoImage from './PromoImage/PromoImage';
import GenderImages from './GenderImages/GenderImages';
import AboutProducts from './AboutProducts/AboutProducts';

const Home = (props) => {
  return (
    <div>
      <PromoImage />
      <GenderImages />
      <AboutProducts />
    </div>
  );
}

export default Home;
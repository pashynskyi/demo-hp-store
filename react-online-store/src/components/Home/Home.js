import React from 'react';
import styles from './Home.module.css';
import PromoImage from './PromoImage/PromoImage';
import GenderImages from './GenderImages/GenderImages';

const Home = (props) => {
    return (
        <div>
            <PromoImage />
            <GenderImages />
        </div>
    );
}

export default Home;
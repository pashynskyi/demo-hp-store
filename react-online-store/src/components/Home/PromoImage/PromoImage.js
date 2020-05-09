import React from 'react';
import styles from './PromoImage.module.css';

const PromoImage = () => {
    return (
        <div className={styles.conteiner}>
            <img 
                className={styles.promoImage}
                src="https://static-eu.insales.ru/files/1/5072/9802704/original/home1_02_4c388999-0b9a-4a73-9fe7-1ca465ec8140_x1024.png"
                alt="" />
        </div>
    );
}

export default PromoImage;
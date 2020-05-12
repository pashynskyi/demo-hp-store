import React from "react";
import styles from "./CartProductInfo.module.css";

const CartProductInfo = (props) => {
    return (
        <div className={styles.productContainer}>
                <div className={styles.photoContainer}>
                    <img src="https://a.lmcdn.ru/img600x866/T/O/TO172EMHQFS4_10370175_1_v1.jpg" alt='' />
                </div>
                <div className={styles.infoContainer}>
                    <div>Pal Lizeri<span>/Поло</span></div>
                    <div>Состав:<span>Хлопок - 100%</span></div>
                    <div>Размер(UKR): <span>50/52</span></div>
                    <div>499 грн</div>
                </div>
            </div>
    );
}

export default CartProductInfo;
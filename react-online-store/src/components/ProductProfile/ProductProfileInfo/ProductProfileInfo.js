import React from 'react';
import styles from './ProductProfileInfo.module.css';
import SelectSizeContainer from '../../SelectSize/SelectSizeContainer';

const ProductProfileInfo = (props) => {
  const splitProductSizes = props.productSizes.split(', ');
  return (
    <React.Fragment>
      <h3 className={styles.productName}>
        {props.productDescription}
      </h3>
      <div className={styles.productStock}>Есть в наличии</div>
      {props.productDiscount !== 0 &&
        <div className={styles.discount}>Товар в акции! Скидка {props.productDiscount} %</div>
      }
      <div className={styles.priceContainer}>
        {props.productDiscount !== 0 &&
          <div className={styles.oldPrice}>{props.productPrice} грн</div>
        }
        <div className={styles.newPrice}>{props.productFinalPrice} грн</div>
      </div>
      <div className={styles.materialContainer}><b>Состав:&nbsp;</b>
        <span>{props.productMaterial}</span>
      </div>
      <p className={styles.textContainer}>
        {props.productShortInformation}
      </p>
      <div className={styles.sizeContainer}><b>Выберите размер:</b>
        <div className={styles.rowSize}>
          <SelectSizeContainer splitProductSizes={splitProductSizes} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductProfileInfo;
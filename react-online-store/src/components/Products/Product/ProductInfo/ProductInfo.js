import React from 'react';
import styles from './ProductInfo.module.css';
import SelectSizeContainer from '../../../SelectSize/SelectSizeContainer';
import ProductButtonContainer from '../../../../common/Button/ProductButton/ProductButtonContainer';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const ProductInfo = (props) => {
  let splitProductSizes = props.productSizes.split(', ');
  return (
    <div className={styles.containerInfo}>
      <div className={styles.descriptionBox}>
        <div className={styles.priceContainer}>
          {props.productDiscount !== 0 &&
            <div className={styles.oldPrice}>{props.productPrice}&nbsp;грн</div>
          }
          <div className={styles.newPrice}>{props.productFinalPrice}&nbsp;грн</div>
        </div>
        <div className={styles.description}>{props.productDescription}</div>
        <div><b>Состав:&nbsp;</b><span>{props.productMaterial}</span></div>
      </div>
      <div className={styles.sizesContainer}>
        <div className={styles.titleSize}>Размеры в наличии:</div>
        <div className={styles.rowSize}>
          <SelectSizeContainer splitProductSizes={splitProductSizes} />
        </div>
        <div className={styles.btnContainer}>
          <NavLink to={`/collection/product/${props.productId}`}>
            <Button className={styles.productBtn} variant="secondary">
              Посмотреть
          </Button>
          </NavLink>
        </div>
        {/* <ProductButtonContainer
          productId={props.productId}
          productPrice={props.productPrice}
          productDescription={props.productDescription}
          productMaterial={props.productMaterial}
          pictureUrl={props.pictureUrl}
          productStatus={props.productStatus}
        /> */}
      </div>
    </div>
  );
}

export default ProductInfo;
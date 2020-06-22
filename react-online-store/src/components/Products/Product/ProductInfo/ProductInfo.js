import React from "react";
import styles from "./ProductInfo.module.css";
import SelectSizeContainer from "../../../SelectSize/SelectSizeContainer";
import ProductButtonContainer from "../../../../common/Button/ProductButton/ProductButtonContainer";


const ProductInfo = (props) => {
  let splitProductSizes = props.productSizes.split(', ');
  return (
    <div className={styles.containerInfo}>
      <div className={styles.descriptionBox}>
        <div className={styles.price}>{props.productPrice}&nbsp;грн</div>
        <div className={styles.description}>{props.productDescription}</div>
        <div><b>Состав:&nbsp;</b><span>{props.productMaterial}</span></div>
      </div>
      <div className={styles.sizesContainer}>
        <div className={styles.titleSize}>Выберите размер:</div>
        <div className={styles.rowSize}>
          <SelectSizeContainer splitProductSizes={splitProductSizes} />
        </div>
        <ProductButtonContainer
          productId={props.productId}
          productPrice={props.productPrice}
          productDescription={props.productDescription}
          productMaterial={props.productMaterial}
          pictureUrl={props.pictureUrl}
        />
      </div>
    </div>
  );
}

export default ProductInfo;
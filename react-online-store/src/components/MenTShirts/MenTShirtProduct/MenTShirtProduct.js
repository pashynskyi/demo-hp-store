import React from "react";
import styles from "./MenTShirtProduct.module.css"
import MenTShirtPhoto from "./MenTShirtPhoto/MenTShirtPhoto";
import MenTShirtInfo from "./MenTShirtInfo/MenTShirtInfo";
import Button from 'react-bootstrap/Button';



const MenTShirtProduct = (props) => {

  let addToCart = (id) => {
    if (props.id === id) {
      return console.log(props);
    }
  };

  return (
    <div className={styles.item}>
      <MenTShirtPhoto photoUrl={props.photoUrl} />
      <MenTShirtInfo
        id={props.id}
        price={props.price}
        firm={props.firm}
        type={props.type}
        material={props.material}
        sizes={props.sizes}
      />
      <div>
        <Button variant="success" onClick={() => addToCart(props.id)}>Добавить в корзину</Button>
      </div>
    </div>
  );
}

export default MenTShirtProduct;
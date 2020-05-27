import React from "react";
import styles from "./MenTShirtInfo.module.css";
import { Form, Button } from "react-bootstrap";


const MenTShirtInfo = (props) => {
  let newSizeElement = React.createRef();
  const onAddToCart = () => {
    let selectedSize = newSizeElement.current.value;
    if (selectedSize.length > 4) {
      return alert("Выберите размер.")
    }
    props.addToCart(
      selectedSize,
      props.productId,
      props.productPrice,
      props.productFirm,
      props.productType,
      props.productMaterial,
      props.pictureUrl
    );
  }
 
  const onRemoveFromCart = () => {
    props.removeFromCart(props.productId)
  }

  let splitProductSizes = props.productSizes.split(',');
  let newProductSizes = splitProductSizes.map((item, index) => (
    <option key={index} value={item}>{item}</option>
  ));

  return (
    <div className={styles.containerInfo}>
      <div>{props.productPrice} грн</div>
      <div>{props.productFirm} <span>/ {props.productType}</span></div>
      <div>Состав: <span>{props.productMaterial}</span></div>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Размеры(INT):</Form.Label>
          <Form.Control as="select" custom ref={newSizeElement} >
            <option>Выберите размер</option>
            {newProductSizes}
          </Form.Control>
        </Form.Group>
      </Form>
      <div>
        <Button variant="success" onClick={() => onAddToCart()}>Добавить в корзину</Button>
        <Button variant="danger" onClick={() => onRemoveFromCart()}>Удалить из корзины</Button>
      </div>
    </div>
  );
}

export default MenTShirtInfo;
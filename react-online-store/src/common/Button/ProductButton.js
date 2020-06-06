import React from 'react';
import { Button } from "react-bootstrap";
import styles from "./ProductButton.module.css";

class ProductButton extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
  }

  render() {
    console.log(this.props.currentValue)
    return (
      <>
        {(!this.state.editMode && this.props.currentValue.length < 5 ) &&
          <div onClick={this.activateEditMode}>
            <Button className={styles.productBtn} variant="success" onClick={() => this.props.onAddToCart()}>Добавить в корзину</Button>
          </div>
        }
        {this.state.editMode &&
          <div onClick={this.deactivateEditMode}>
            <Button className={styles.productBtn} variant="danger" onClick={() => this.props.onRemoveFromCart()}>Удалить из корзины</Button>
          </div>
        }
      </>
    )
  }
}
export default ProductButton;
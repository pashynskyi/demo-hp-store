import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import styles from './ProductButton.module.css';

class ProductButton extends React.Component {
  state = {
    editMode: false
  }

  onAddToCart = () => {
    this.props.addToCart(
      this.props.productSize,
      this.props.productId,
      this.props.productFinalPrice,
      this.props.productDescription,
      this.props.productMaterial,
      this.props.pictureUrl
    );
    this.props.addQuantity(this.props.productId, this.props.productSize, 1, this.props.productFinalPrice);
    this.props.resetSize();
    this.props.onAddToAuthCart(this.props.productId, this.props.productSize);
  }

  onRemoveFromCart = () => {
    this.props.removeFromCart(this.props.productId);
    this.props.onDeleteFromAuthCart(this.props.productId);
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
    return (
      <Fragment>
        {((!this.state.editMode && !this.props.productSize) || this.props.productStatus === 0) &&
          <div onClick={this.activateEditMode}>
            <Button disabled className={styles.productBtn} variant="success">Добавить в корзину</Button>
          </div>
        }
        {(this.state.editMode && this.props.productStatus !== 0) &&
          <div onClick={this.deactivateEditMode}>
            <Button className={styles.productBtn} variant="danger" onClick={() => this.onRemoveFromCart()}>Удалить из корзины</Button>
          </div>}
        {(this.props.productSize && this.props.productStatus !== 0) &&
          <div onClick={this.activateEditMode}>
            <Button className={styles.productBtn} variant="success" onClick={() => this.onAddToCart()}>Добавить в корзину</Button>
          </div>
        }
      </Fragment>
    )
  }
}
export default ProductButton;
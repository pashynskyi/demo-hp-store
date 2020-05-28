import React from 'react';
import { Button } from "react-bootstrap";

class ProductButton extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode() {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    });
  }

  render() {
    return (
      <>
        {(!this.state.editMode && this.props.selectedSize !== null) &&
          <div onClick={this.activateEditMode.bind(this)}>
            <Button variant="success" onClick={() => this.props.onAddToCart()}>Добавить в корзину</Button>
          </div>
        }
        {this.state.editMode &&
          <div onClick={this.deactivateEditMode.bind(this)}>
            <Button variant="danger" onClick={() => this.props.onRemoveFromCart()}>Удалить из корзины</Button>
          </div>
        }
      </>
    )
  }
}
export default ProductButton;
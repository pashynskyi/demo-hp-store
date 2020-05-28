import React from 'react';
import { Button } from "react-bootstrap";

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
          <span onClick={this.activateEditMode}>
            <Button variant="success" onClick={() => this.props.onAddToCart()}>Добавить в корзину</Button>
          </span>
        }
        {this.state.editMode &&
          <span onClick={this.deactivateEditMode}>
            <Button variant="danger" onClick={() => this.props.onRemoveFromCart()}>Удалить из корзины</Button>
          </span>
        }
      </>
    )
  }
}
export default ProductButton;
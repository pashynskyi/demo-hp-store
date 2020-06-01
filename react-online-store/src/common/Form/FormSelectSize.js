import React from 'react';
import { Form } from "react-bootstrap";
import ProductButton from '../Button/ProductButton';


class FormSelectSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Выберите размер' };
    this.selectSize = this.selectSize.bind(this);
    this.defaultSize = this.defaultSize.bind(this);
  }

   onAddToCart = () => {
    this.props.addToCart(this.props.selectedSize);
    this.props.addQuantity(this.props.productId, this.state.value, 1, this.props.productPrice);
  }

    onRemoveFromCart = () => {
    this.props.removeFromCart(this.props.productId)
  }

  selectSize(event) {
    this.setState({ value: event.target.value });
    this.props.selectSize(
      event.target.value,
      this.props.productId,
      this.props.productPrice,
      this.props.productFirm,
      this.props.productType,
      this.props.productMaterial,
      this.props.pictureUrl,
    )
    event.preventDefault();
  }

  defaultSize(event) {
    setTimeout(() => this.setState({value: 'Выберите размер'}), 500);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Form onBlur={this.defaultSize}>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Размеры(INT):</Form.Label>
            <Form.Control as="select" custom value={this.state.value} onChange={this.selectSize}>
              <option>Выберите размер</option>
              {this.props.newProductSizes}
            </Form.Control>
          </Form.Group>
        </Form>
        <ProductButton onAddToCart={this.onAddToCart}
          onRemoveFromCart={this.onRemoveFromCart}
          currentValue={this.state.value}
        />
      </>
    )
  }
}
export default FormSelectSize;
import React from 'react';
import { Form } from "react-bootstrap";
import ProductButton from '../Button/ProductButton';


class FormSelectSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Выберите размер' };
    this.selectSize = this.selectSize.bind(this);

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
        this.props.pictureUrl
      )
      event.preventDefault();
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Размеры(INT):</Form.Label>
            <Form.Control as="select" custom value={this.state.value} onChange={this.selectSize}>
              <option>Выберите размер</option>
              {this.props.newProductSizes}
            </Form.Control>
          </Form.Group>
        </Form>
        <ProductButton onAddToCart={this.props.onAddToCart}
         onRemoveFromCart={this.props.onRemoveFromCart} 
         currentValue={this.state.value} />
      </>
    )
  }
}
export default FormSelectSize;
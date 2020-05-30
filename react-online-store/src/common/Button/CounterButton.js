import React from 'react';
import { Button, ButtonGroup } from "react-bootstrap";

class CounterButton extends React.Component {
  state = {
    value: 1
  }

  addBtn = (event) => {
    this.setState({
      value: ++event.target.value
    });
    setTimeout(() => this.props.addQuantity(this.props.productId, this.props.productSize, this.state.value))
  }

  subBtn = (event) => {
    this.setState({
      value: --event.target.value
    });
    setTimeout(() => this.props.removeQuantity(this.props.productId, this.props.productSize, this.state.value))
  }

  render() {
    return (
      <ButtonGroup aria-label="Basic example">
        <Button value={this.state.value} onClick={this.subBtn} variant="danger">-</Button>
        <Button variant="secondary">{this.state.value}</Button>
        <Button value={this.state.value} onClick={this.addBtn} variant="success">+</Button>
      </ButtonGroup>
    )
  }
}
export default CounterButton;
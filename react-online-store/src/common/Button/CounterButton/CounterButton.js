import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class CounterButton extends React.Component {
  state = {
    value: 1
  }

  addBtn = (event) => {
    if (event.target.value >= 99) {
      return this.setState({
        value: 99
      });
    }
    else {
      this.setState({
        value: ++event.target.value
      });
    }
    setTimeout(() => this.props.addQuantity(this.props.productId, this.props.productSize, this.state.value, this.props.productPrice));
    setTimeout(() => this.props.onCurrentQuantity(this.props.productId, this.state.value));
  }

  subBtn = (event) => {
    if (event.target.value <= 1) {
      return this.setState({
        value: 1
      });
    }
    else {
      this.setState({
        value: --event.target.value
      });
    }
    setTimeout(() => this.props.subQuantity(this.props.productId, this.props.productSize, this.state.value, this.props.productPrice));
    setTimeout(() => this.props.onCurrentQuantity(this.props.productId, this.state.value));
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
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
  }

  subBtn = (event) => {
    this.setState({
      value: --event.target.value 
    });
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
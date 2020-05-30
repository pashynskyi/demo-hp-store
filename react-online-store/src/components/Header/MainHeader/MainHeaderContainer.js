import React from 'react';
import styles from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';
import MainHeader from './MainHeader';
import { connect } from 'react-redux';

class MainHeaderContainer extends React.Component {
  render() {
    return <MainHeader totalCount={this.props.totalCount} />
  }
}

let mapStateToProps = (state) => {
  return {
    totalCount: state.cartProductPage.items.length + (state.cartProductPage.quantityItem.reduce((total, quantityItem) => (total + quantityItem.quantity - 1), 0))
  }
}

export default connect(mapStateToProps, {})(MainHeaderContainer);
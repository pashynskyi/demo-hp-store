import React from 'react';
import styles from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';
import MainHeader from './MainHeader';
import { connect } from 'react-redux';

class MainHeaderContainer extends React.Component {
    render() {
      return <MainHeader count={this.props.count} />
    }
  }

let mapStateToProps = (state) => {
    return {
        count: state.cartProductPage.items.length
    }
}

export default connect(mapStateToProps, {})(MainHeaderContainer);
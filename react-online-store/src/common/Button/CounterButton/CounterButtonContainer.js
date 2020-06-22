import React from 'react';
import { connect } from 'react-redux';
import CounterButton from './CounterButton';
import { addQuantity, subQuantity } from '../../../redux/reducers/cartProductReducer';
import { cartAPI } from '../../../api/api';

class CounterButtonContainer extends React.Component {

  onCurrentQuantity = (productId, quantity) => {
    this.addCurrentQuantity.bind(this)(productId, quantity)
  }

  componentDidMount() {
    this.addCurrentQuantity = (productId, quantity) => {
      this.props.isAuth && cartAPI.putCurrentQuantity(productId, quantity, this.props.token)
    }
  }

  render() {
    return <CounterButton {...this.props} onCurrentQuantity={this.onCurrentQuantity} />
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token,
  }
}

export default connect(mapStateToProps, { addQuantity, subQuantity })(CounterButtonContainer);
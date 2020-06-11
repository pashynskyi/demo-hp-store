import { connect } from 'react-redux';
import ProductButton from './ProductButton';
import { addToCart, removeFromCart, addQuantity } from '../../redux/reducers/cartProductReducer';

const mapStateToProps = (state) => {
  return {
    productSize: state.productsPage.productSize,
  }
}

export default connect(mapStateToProps, { addToCart, removeFromCart, addQuantity })(ProductButton);
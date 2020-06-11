import { connect } from 'react-redux';
import SelectSize from './SelectSize';
import {setSize} from '../../redux/reducers/productsReducer';

const mapStateToProps = (state) => {
  return {
    productSize: state.productsPage.productSize,
  }
}

export default connect(mapStateToProps, {setSize})(SelectSize);
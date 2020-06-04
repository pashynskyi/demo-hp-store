import { connect } from 'react-redux';
import Filter from './Filter';
import {setFilter} from '../../redux/reducers/productsReducer';

const mapStateToProps = (state) => {
  return {
    filterBy: state.productsPage.filterBy,
  }
}

export default connect(mapStateToProps, {setFilter})(Filter);
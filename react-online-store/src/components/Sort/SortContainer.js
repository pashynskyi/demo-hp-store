import React from 'react';
import { connect } from 'react-redux';
import Sort from './Sort';
import { setSort, requestProducts } from '../../redux/reducers/productsReducer';
import { helperRequestProducts } from '../../utils/helperRequestProducts';

class SortContainer extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.sortBy !== this.props.sortBy) {
      console.log("UPDATINGTEST!!!222")
      helperRequestProducts(
        this.props.locationPathname,
        this.props.requestProducts,
        1,
        this.props.pageSize,
        this.props.sortBy
      );
    }
  }

  render() {
    return <Sort {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    sortBy: state.productsPage.sortBy,
    pageSize: state.productsPage.pageSize,
    currentPage: state.productsPage.currentPage,
  }
}

export default connect(mapStateToProps, { setSort, requestProducts })(SortContainer);
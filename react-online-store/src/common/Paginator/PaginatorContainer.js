import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, requestProducts, resetIsReady, resetCurrentPage } from './../../redux/reducers/productsReducer';
import Paginator from './Paginator';
import { helperRequestProducts } from '../../utils/helperRequestProducts';

class PaginatorContainer extends React.Component {

  onPageChanged = (pageNumber) => {
    debugger;
    this.props.setCurrentPage(pageNumber)
    helperRequestProducts(
      this.props.locationPathname,
      this.props.requestProducts,
      pageNumber,
      this.props.pageSize,
      this.props.sortBy
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sortBy !== this.props.sortBy) {
      this.props.resetCurrentPage()
    }
  }


  render() {
    return <Paginator {...this.props} onPageChanged={this.onPageChanged} />
  }
}

const mapStateToProps = (state) => {
  return {
    pageSize: state.productsPage.pageSize,
    totalPages: state.productsPage.totalPages,
    currentPage: state.productsPage.currentPage,
    sortBy: state.productsPage.sortBy,
    isAuth: state.loginPage.isAuth,
    token: state.loginPage.currentUser.token,
  }
}

export default connect(mapStateToProps, { setCurrentPage, requestProducts, resetIsReady, resetCurrentPage })(PaginatorContainer);
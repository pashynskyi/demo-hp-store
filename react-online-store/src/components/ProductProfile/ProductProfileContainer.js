import React from 'react';
import { connect } from 'react-redux';
import ProductProfile from './ProductProfile';
import { requestSelectedProduct } from './../../redux/reducers/productProfileReducer';
import { Spinner } from 'react-bootstrap';

class ProductProfileContainer extends React.Component {

  splittedPathname = this.props.location.pathname.split('/');
  productId = this.splittedPathname[3];

  componentDidMount() {
    this.props.requestSelectedProduct(this.productId)
  }

  componentDidUpdate(prevProps) {
  }

  render() {
    return (
      !this.props.isProductReady ? <Spinner animation="border" /> :
        <ProductProfile
          selectedProduct={this.props.selectedProduct}
        />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    selectedProduct: state.productProfilePage.selectedProduct,
    isProductReady: state.productProfilePage.isProductReady
  }
}

export default connect(mapStateToProps, { requestSelectedProduct })(ProductProfileContainer);
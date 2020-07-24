import React from 'react';
import { connect } from 'react-redux';
import ProductEdit from './ProductEdit';
import { editCurrentProduct } from './../../redux/reducers/productsReducer';
import { requestSelectedProduct } from './../../redux/reducers/productProfileReducer';
import { Spinner } from 'react-bootstrap';

class ProductEditContainer extends React.Component {

  goBack = this.goBack.bind(this);

  goBack() {
    this.props.history.goBack();
  }

  onSubmit = (productEditData) => {
    this.props.editCurrentProduct(productEditData, this.props.token)
  }

  componentDidMount() {
    this.props.requestSelectedProduct(this.props.currentProduct.productId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isReady !== this.props.isReady) {
      this.goBack()
    }
  }

  render() {
    return (
      !this.props.isProductReady ? <Spinner animation="border" /> :
        <ProductEdit
          onSubmit={this.onSubmit}
          selectedProduct={this.props.selectedProduct}
        />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    currentProduct: state.productsPage.currentProduct,
    isReady: state.productsPage.isReady,
    token: state.loginPage.currentUser.token,
    selectedProduct: state.productProfilePage.selectedProduct,
    isProductReady: state.productProfilePage.isProductReady
  }
}

export default connect(mapStateToProps, { editCurrentProduct, requestSelectedProduct })(ProductEditContainer);
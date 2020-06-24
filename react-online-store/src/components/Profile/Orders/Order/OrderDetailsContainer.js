import { connect } from 'react-redux';
import OrderDetails from './OrderDetails';



let mapStateToProps = (state) => {
  return {
    orderDetails: state.profilePage.orderDetails
  }
}

export default connect(mapStateToProps, {})(OrderDetails);
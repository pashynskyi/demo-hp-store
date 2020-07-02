import { connect } from 'react-redux';
import OrderResponse from "./OrderResponse";
import { clearOrder } from "./../../redux/reducers/quickOrderReducer";
import { resetCart } from "./../../redux/reducers/cartProductReducer";

let mapStateToProps = ({ quickOrderPage }) => {
  return {
    order: quickOrderPage.order
  }
}

export default connect(mapStateToProps, { clearOrder, resetCart })(OrderResponse);
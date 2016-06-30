import * as actions from '../actions'
import {connect} from 'react-redux';
import Product from '../components/Product2.jsx'

const mapStateToProps = (state, ownProps) => {
  const {sku} = ownProps;
  return {
    name: state.auth.business.products[sku].name
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {sku} = ownProps;
  return {
    incrementItem: () => {
      dispatch(actions.basketIncreaseCount(sku));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);

import React from 'react';
import { connect } from 'react-redux';
import './InputNumber.css';
import { setUniquePropertyToUrl } from '../../utils/searchParamsUrl';
import { InputNumberWithState } from './InputNumber';

export class InputNumberWrapper extends React.PureComponent {
    handleChange = ({ target: { id, value }}) => {
        this.props[`${id}Change`](value);
        setUniquePropertyToUrl(this.props.id, value);
    }

    render() {
        return <InputNumberWithState {...this.props} 
                                     value={this.props[this.props.id]} 
                                     onChange={this.handleChange} />
    }
}
const mapStateToProps = (state) => {
   return {
        pricemin: state.pricemin,
        pricemax: state.pricemax,
        discount: state.discount
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        priceminChange: (pricemin) => dispatch({ type: 'PRICEMIN_CHANGE', pricemin }),
        pricemaxChange: (pricemax) => dispatch({ type: 'PRICEMAX_CHANGE', pricemax }),
        discountChange: (discount) => dispatch({ type: 'DISCOUNT_CHANGE', discount }),
    }
};

const InputNumberConnect = connect(mapStateToProps, mapDispatchToProps)(InputNumberWrapper)

export default InputNumberConnect;
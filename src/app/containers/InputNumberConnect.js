import React from 'react';
import { connect } from 'react-redux';
import { setUniquePropertyToUrl } from '../utils/searchParamsUrl';
import { InputNumberWithState } from '../components/InputNumber/InputNumber';
import { changeNumberInputValue } from '../store/actions';

export class InputNumberWrapper extends React.PureComponent {
    handleChange = ({ target: { id, value }}) => {
        this.props.changedValue(id, value);
        setUniquePropertyToUrl(id, value);
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

const mapDispatchToProps = (dispatch) => ({
    changedValue: (id, value) => dispatch(changeNumberInputValue(id, value))
});

const InputNumberConnect = connect(mapStateToProps, mapDispatchToProps)(InputNumberWrapper)

export default InputNumberConnect;
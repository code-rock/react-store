import React from 'react';
import { connect } from 'react-redux';
import { setUniquePropertyToUrl } from '../utils/searchParamsUrl';
import { InputNumberWithState } from '../components/InputNumber/InputNumber';
import { push } from 'connected-react-router'

export class InputNumberWrapper extends React.PureComponent {
    handleChange = ({ target: { id, value }}) => {
        this.props.addToUrl(id, value);
    }

    render() {
        return <InputNumberWithState {...this.props} 
                                     value={this.props[this.props.id]} 
                                     onChange={this.handleChange} />
    }
}

const mapStateToProps = ({ filter }) => {
   return {
        pricemin: filter.pricemin,
        pricemax: filter.pricemax,
        discount: filter.discount
    }
};

const mapDispatchToProps = (dispatch) => ({
    addToUrl: (id, value) =>  dispatch(push(setUniquePropertyToUrl(id, value || 0), { [id]: value || 0 }))
});

const InputNumberConnect = connect(mapStateToProps, mapDispatchToProps)(InputNumberWrapper)

export default InputNumberConnect;
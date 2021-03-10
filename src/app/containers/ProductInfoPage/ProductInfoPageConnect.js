import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ProductInfoPage from './ProductInfoPage';

class ProductInfoPageWrapper extends PureComponent {
    render() {
        const { products, productID } = this.props;
        return <ProductInfoPage product={products.find(product => product.id === productID)} />
    }
};

const mapStateToProps = ({ filter, router }) => ({
    productID: router.location.state.productID,
    products: filter.products
});

const ProductInfoPageConnect = connect(mapStateToProps, null)(ProductInfoPageWrapper)

export default ProductInfoPageConnect;
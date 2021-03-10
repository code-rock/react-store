import React, { PureComponent } from 'react';
import Lamp from '../../icons/Lamp';
import BackButton from '../../components/BackButton/BackButton';
import './ProductInfoPage.css';
import ProductItem from 'csssr-school-product-card';
import ProductPrice from '../../components/ProductPriсe/ProductPriсe';
import RatingComponent from '../../components/RatingComponent/RatingComponent';
import { Route } from 'react-router';
import ProductCardWrapper from '../../components/ProductCard/ProductCardWrapper';

class ProductInfoPage extends PureComponent {
    render() {
        const { product = {} } = this.props;

        return  <Route to={`/product/${product.id}`}>
                    <div className="product-page__container">
                        <BackButton />
                        {product.id
                            ? <div className="icon__404">
                                <ProductCardWrapper
                                isInStock={product.isInStock}
                                img={`../${product.imgProduct}`}
                                title={product.name}
                                price={<ProductPrice price={product.price} curr={'₽'} size={'m'} />}
                                subPriceContent={<ProductPrice price={product.subPriceContent} curr={'₽'} size={'s'} />}
                                maxRating={5}
                                rating={product.rating}
                                key={product.id}
                                type={'horizontal'} />
                              </div>
                            : <div className="icon__404"><Lamp /></div>}
                        
                    </div>
                </Route>
    }
};

export default ProductInfoPage;
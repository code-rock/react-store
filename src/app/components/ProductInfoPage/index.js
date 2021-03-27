import React, { memo } from 'react';
import { Route } from 'react-router';
import ErrorWarning from '../ErrorWarning';
import BackButton from '../BackButton/BackButton';
import ProductPrice from '../ProductPriсe/ProductPriсe';
import ProductCardWrapper from '../ProductCard/ProductCardWrapper';
import './styles.css';

function ProductInfoPage({ product }) {
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
                            : <ErrorWarning />
                        }
                        
                    </div>
                </Route>
};

export default memo(ProductInfoPage);
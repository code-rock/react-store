import React, { PureComponent } from 'react';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import ProductPrice from '../ProductPriсe/ProductPriсe';

export default class Page extends PureComponent {
    render() {
        const { products } = this.props;
        return products.map((el) => ( 
                <ProductItem
                    isInStock={el.isInStock}
                    img={el.imgProduct}
                    title={el.name}
                    price={<ProductPrice price={el.price} curr={'₽'} size={'m'} />}
                    subPriceContent={<ProductPrice price={el.subPriceContent} curr={'₽'} size={'s'} />}
                    maxRating={5}
                    rating={el.rating}
                    ratingComponent={RatingComponent}
                    key={el.id}
                />))
        }
}
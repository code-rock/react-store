import React, { PureComponent } from 'react';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import ProductPrice from '../ProductPriсe/ProductPriсe';
import { Link } from 'react-router-dom';

export default class Page extends PureComponent {
    render() {
        const { products } = this.props;
        return products.map((el) => ( 
                <Link to={{ pathname: `/product/${el.id}`, state: { productID: el.id}}}>
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
                    />
                </Link>))
        }
}
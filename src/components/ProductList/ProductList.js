import React from 'react';

import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';

import './ProductList.css';

import products from '../../products';

function ProductList() {
    return <ul className='list'>
              {products.map((el) =>  ( 
                <ProductItem
                    isInStock={el.isInStock}
                    img={el.imgProduct}
                    title={el.name}
                    price={el.price}
                    subPriceContent={el.subPriceContent}
                    maxRating={5}
                    rating={el.rating}
                    ratingComponent={RatingComponent}
                    key={el.id}
                />
              ))}
           </ul>
}

export default ProductList;
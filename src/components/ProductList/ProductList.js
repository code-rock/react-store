import React from 'react';

import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import ProductPrice from '../ProductPriсe/ProductPriсe';

import './ProductList.css';

import products from '../../products';

function ProductList() {
    return Array.isArray(products) && !!products.length 
            ? <ul className='list'>
                {products.map((el) =>  ( 
                  <ProductItem
                      isInStock={el.isInStock}
                      img={el.imgProduct}
                      title={el.name}
                      price={ProductPrice(el.price, '₽')}
                      subPriceContent={ProductPrice(el.subPriceContent, '₽', 's')}
                      maxRating={5}
                      rating={el.rating}
                      ratingComponent={RatingComponent}
                      key={el.id}
                  />
                ))}
              </ul>
           : <p>Ничего не найдено...</p>;
}

export default ProductList;
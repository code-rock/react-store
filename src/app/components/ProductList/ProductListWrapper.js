import React from 'react';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import ProductPrice from '../ProductPriсe/ProductPriсe';
import './ProductListWrapper.css';
import LogRender from '../../containers/LogRender';

class ProductListWrapper extends LogRender {
    render() {
      const { products, activePage } = this.props;
      const currPageProducts = products[Number(activePage) - 1];
      return Array.isArray(currPageProducts) && !!currPageProducts.length 
            ? <ul className='list'>
                {currPageProducts.map((el) =>  ( 
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
                ))}
              </ul>
           : <p>Ничего не найдено...</p>;
      }
}

export default ProductListWrapper;
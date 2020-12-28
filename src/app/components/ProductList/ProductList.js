import React from 'react';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import ProductPrice from '../ProductPriсe/ProductPriсe';
import './ProductList.css';
import LogRender from '../../containers/LogRender';

class ProductList extends LogRender {
    render() {
        return Array.isArray(this.props.products) && !!this.props.products.length 
            ? <ul className='list'>
                {this.props.products.map((el) =>  ( 
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

export default ProductList;
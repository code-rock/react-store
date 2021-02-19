import React, { PureComponent } from 'react';
import ProductItem from 'csssr-school-product-card';
import RatingComponent from '../RatingComponent/RatingComponent';
import ProductPrice from '../ProductPriсe/ProductPriсe';
import './ProductListWrapper.css';
import {Router, Switch, Route,  useParams } from 'react-router-dom';
class ProductListWrapper extends PureComponent {
    constructor(props) {
      super(props);
    } 

    render() {
      const { products, activePage } = this.props;
     // const { id } = useParams();
      //const currPageProducts = products[Number(activePage) - 1];
      console.log(products, 'products')
     // console.log(id, '')
      return Array.isArray(products) && !!products.length 
            ? <ul className='list'>
              <Switch>
                {products.map((arr, id) => (     
                    <Route to={`/?pageNum=${id + 1}`}>
                      {arr.map((el) => ( 
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
                      />))} 
                    </Route>
                ))}</Switch>
              </ul>
           : <p>Ничего не найдено...</p>;
      }
}

export default ProductListWrapper;
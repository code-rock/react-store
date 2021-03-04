import React, { PureComponent } from 'react';
import './ProductListWrapper.css';
import Page from './Page';
import { Switch, Route } from 'react-router-dom';

class ProductListWrapper extends PureComponent {
    render() {
      const { products } = this.props;
      return Array.isArray(products) && !!products.length 
              ? <ul className='list'>
                  <Switch>
                    <Route path={'/'}>
                      <Page products={products[0]} />
                    </Route>
                    {products.map((arr, id) =>     
                        <Route path={`/page=${id + 1}`}>
                          <Page products={arr} />
                        </Route>
                    )} 
                  </Switch>
                </ul>
              : <p>Ничего не найдено...</p>;
      }
}

export default ProductListWrapper;
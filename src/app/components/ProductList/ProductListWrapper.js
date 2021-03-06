import React from 'react';
import './ProductListWrapper.css';
import Page from './Page';
import UsePageNumber from '../../hocs/UsePageNumber';

function ProductListWrapper({ products }) {
      const { page } = UsePageNumber();
      const curr = products[page - 1];
       return  <div className='list'>
                { 
                  Array.isArray(curr) && curr.length
                  ? <Page products={curr} />
                  : <p>Ничего не найдено...</p>
                }
              </div>
}

export default ProductListWrapper;
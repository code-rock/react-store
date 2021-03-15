import React from 'react';
import './ProductListWrapper.css';
import Page from './Page';
import UsePageNumber from '../../hocs/UsePageNumber';
import { setSearchPropertyToHistory } from '../../utils/searchParamsUrl';
import { withRouter } from 'react-router-dom';

function ProductListWrapper({ products, history }) {
      const { page } = UsePageNumber();
      const maxPage = products.length;      

      if (page > maxPage) {
        setSearchPropertyToHistory('pageNum', 1, history);
      }

      const curr = products[page - 1];
      return  <div className='list'>
                { 
                  Array.isArray(curr) && curr.length
                  ? <Page products={curr} maxPage={products.length}/>
                  : <p>Ничего не найдено...</p>
                }
              </div>
}

export default withRouter(ProductListWrapper);
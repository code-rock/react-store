import React from 'react';
import './ProductListWrapper.css';
import Page from './Page';
import UsePageNumber from '../../hocs/UsePageNumber';
import { deletePropertyFromUrl } from '../../utils/searchParamsUrl';
import { withRouter } from 'react-router-dom';

function ProductListWrapper({ products, history }) {
      const { page } = UsePageNumber();
      const maxPage = products.length;      

      if (page > maxPage) {
        deletePropertyFromUrl('pageNum', history); // поумолчанию pageNum становится 1
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
import React from 'react';
import './ProductListWrapper.css';
import Page from './Page';
import UsePageNumber from '../../hocs/UsePageNumber';
import { deletePropertyFromUrl } from '../../utils/searchParamsUrl';
import { withRouter } from 'react-router-dom';

function ProductListWrapper({ products, history }) {
      const { page } = UsePageNumber();
      const maxPage = products.length;
      if (maxPage < page) deletePropertyFromUrl('pageNum', history);
      const curr = products[maxPage < page ? 0 : page - 1];
      return  <div className='list'>
                { 
                  Array.isArray(curr) && curr.length
                  ? <Page products={curr} maxPage={products.length}/>
                  : <p>Ничего не найдено...</p>
                }
              </div>
}

export default withRouter(ProductListWrapper);
import React, { memo } from 'react';
import SkeletonProductsList from '../SkeletonProductsList';
import ProductsListPage from '../ProductsListPage';
import ErrorWarning from '../ErrorWarning';

export default memo(function ProductList({products, status, page}) {
      switch(status) {
        case 'loading': 
            return <SkeletonProductsList />;
        case 'ok': 
            return <ProductsListPage products={products[page - 1] || []} />;
        case 'error': 
        case 'nothing':
            return <ErrorWarning text={'Товары не найдены'} />;
        default:
        break;        
      }
})
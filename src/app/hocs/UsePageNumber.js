import React from 'react';
import { useLocation } from 'react-router-dom';
  
export default function UsePageNumber() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get('pageNum')) || 1;
    return { page, search: searchParams};
    //return <Compoment  {...this.props} page={page} />   
}

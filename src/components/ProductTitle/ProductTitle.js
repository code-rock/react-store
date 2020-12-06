import React from 'react';
import pt from 'prop-types';

import './ProductTitle.css';

function ProductTitle({title}) {
    return <h1 className='title'>{title}</h1>;
}

ProductTitle.propTypes = {
    title: pt.string.isRequired,
};

export default ProductTitle;
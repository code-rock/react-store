import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './FilterFormButton.css'; 

function FilterFormButton({value, url, handleClick}) {
    return  <Link to={url} onClick={handleClick} className='filter-form-button'>    
                {value}
            </Link>
} 

export default memo(FilterFormButton);
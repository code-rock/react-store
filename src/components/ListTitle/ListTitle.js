import React from 'react';

import './ListTitle.css';

function ListTitle({children}) {
    return <h1 className='title'>{children}</h1>;
}

export default ListTitle;
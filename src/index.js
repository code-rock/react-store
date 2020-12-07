import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ListTitle from './components/ListTitle/ListTitle';
import ProductList from './components/ProductList/ProductList';

function App() {
    return (    
        <div className='main'>
            <ListTitle>
                Список товаров
            </ListTitle>
            <ProductList />
        </div>
    ) 
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
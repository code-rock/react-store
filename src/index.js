import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ProductTitle from './components/ProductTitle/ProductTitle';
import ProductList from './components/ProductList/ProductList';

function App() {
    return (    
        <div className='wrapper'>
            <ProductTitle title="Список товаров" />
            <ProductList />
        </div>
    ) 
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
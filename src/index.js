import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ListTitle from './app/components/ListTitle/ListTitle';
import ProductPageConnect from './app/containers/ProductPage';

function App() {
    return (    
        <main>
            <ListTitle>
                Список товаров
            </ListTitle>
            <ProductPageConnect />
        </main>
    ) 
}

const rootElement = document.getElementById('root');

ReactDOM.render(
   <App />,
    rootElement
);
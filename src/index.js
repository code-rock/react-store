import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import store from './app/store';
import ListTitle from './app/components/ListTitle/ListTitle';
import ProductPageConnect from './app/containers/ProductPage/ProductPageConnect';
import { Provider } from 'react-redux';
import BackButton from './app/containers/ProductInfoPage/ProductInfoPage';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {
    return (    
        <main>
                 <BrowserRouter>
            {/* /<BackButton /> */}
            <ListTitle>
                Список товаров
            </ListTitle>
            <ProductPageConnect />
            </BrowserRouter>
        </main>
    ) 
}

const rootElement = document.getElementById('root');

ReactDOM.render(
   <Provider store={store}><App /></Provider>,
    rootElement
);
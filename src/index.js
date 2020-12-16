import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import ListTitle from './components/ListTitle/ListTitle';
import ProductPage from './containers/ProductPage';

function App() {
    return (    
        <main>
            <ListTitle>
                Список товаров
            </ListTitle>
            <ProductPage />
        </main>
    ) 
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
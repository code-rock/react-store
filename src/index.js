import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import store from './app/store';
import ListTitle from './app/components/ListTitle/ListTitle';
import ProductPageConnect from './app/containers/ProductPage/ProductPageConnect';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './app/store/configureStore';

function App() {
    return (    
        <main>
            <ListTitle>Список товаров</ListTitle>
            <ProductPageConnect />
        </main>
    ) 
}

const rootElement = document.getElementById('root');

ReactDOM.render(
   <Provider store={store}>
       <ConnectedRouter history={history}>
           <App />
        </ConnectedRouter>
    </Provider>,
    rootElement
);
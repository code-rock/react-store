import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import store from './app/store';
import ListTitle from './app/components/ListTitle/ListTitle';
import ProductPageConnect from './app/containers/ProductPageConnect';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './app/store/configureStore';
import ProductInfoPageConnect from './app/containers/ProductInfoPageConnect';
import { Route, Switch } from 'react-router';

function App() {
    return (    
        <main>
            <Switch>
                <Route path='/product' render={() => <ProductInfoPageConnect />} />
                <Route path='/' render={() => 
                    <div>
                        <ListTitle>Список товаров</ListTitle>
                        <ProductPageConnect />
                    </div>} />
            </Switch>
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
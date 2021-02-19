import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  console.log(preloadedState,'preloadedState')
  const store = createStore(
    createRootReducer(history), 
    preloadedState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history)
      ),
    ),
  )
  console.log(store.getState(), 'store');
  return store;
}
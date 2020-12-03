import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import products from './products';

function Item(props) {
    return <li>{props.item}</li>;
}

function App() {
    return (    
        <div className='wrapper'>
            <h1 className='title'>Список товаров</h1>
            <ul className='list'>
                {products.map((el, id) =>  id < 3 && <Item key={el.key} item={el.name} />)}
            </ul>
        </div>
    ) 
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
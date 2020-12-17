import React from 'react';
import './ListTitle.css';
import LogRender from '../../containers/LogRender';

class ListTitle extends LogRender {
    render() {
         return <h1 className='title'>
                    {this.props.children}
                </h1>;
    }
}

export default ListTitle;
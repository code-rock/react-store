import React, { PureComponent } from 'react';
import './ListTitle.css';

class ListTitle extends PureComponent {
    render() {
         return <h1 className='title'>
                    {this.props.children}
                </h1>;
    }
}

export default ListTitle;
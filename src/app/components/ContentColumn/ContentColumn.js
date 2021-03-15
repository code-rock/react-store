import React, { PureComponent } from 'react';
import './ContentColumn.css';

class ContentColumn extends PureComponent {
    render() {
        return <div className="content-columns">
                    {this.props.children}
               </div>
    }
}

export default ContentColumn;
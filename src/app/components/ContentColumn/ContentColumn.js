import React from 'react';
import './ContentColumn.css';
import LogRender from '../../containers/LogRender';

class ContentColumn extends LogRender{
    render() {
        return <div className="content-columns">
                    {this.props.children}
               </div>
    }
}

export default ContentColumn;
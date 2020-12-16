import React from 'react';
import './FilterLabel.css';
import LogRender from '../../containers/LogRender';

class FilterLabel extends LogRender {
    render() {
          return <label htmlFor={this.props.id} 
                        className="filter-label">
                            {this.props.children}
                 </label>
    }
  
}

export default FilterLabel;
import React from 'react';
import './RangeFilter.css';
import LogRender from '../../containers/LogRender';

class RangeFilter extends LogRender {
    render() {
        return <div className="filter">
                <div className="filter-title">{this.props.title}</div>
                <div className="start-label">{this.props.slabel}</div>
                <div className="start-input">{this.props.sinput}</div>
                <div className="finish-label">{this.props.flabel}</div>
                <div className="finish-input">{this.props.finput}</div>
                <did className="error">{this.props.error}</did>
                <div className="filter-button">{this.props.btn}</div>
           </div>
    }
}

export default RangeFilter;
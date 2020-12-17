import React from 'react';
import './RangeFilter.css';
import LogRender from '../../containers/LogRender';

class RangeFilter extends LogRender {
    constructor(props) {
        super(props);

        this.inputFrom = React.createRef();
        this.inputTo = React.createRef();
    }

    // Запрещает ввод символов через клавиатуру(-e)
    handleKeyDown = (e) => {
        if (e.keyCode === 69 || e.keyCode === 189) e.preventDefault();
    }

    render() {
        const {title, min, max, errortype, errorfrom, errorto, handleChange, handleClick} = this.props;

        return <form onSubmit={handleClick}>
                    <fieldset className="filter">
                        <legend className="filter__title">{title}</legend>

                        <label className="filter__label start-label"
                               htmlFor="filter-price-from">от</label>
                        <input className={`filter__input start-input ${errorfrom ? 'filter__input_is-fail' : ''}`}
                               type="number" 
                               id="filter-price-from"
                               ref={this.inputFrom}
                               defaultValue={min}
                               onChange={handleChange}
                               onKeyDown={this.handleKeyDown} />

                        <label className="filter__label finish-label"
                               htmlFor="filter-price-to">до</label>
                        <input className={`filter__input finish-input ${errorto ? 'filter__input_is-fail' : ''}`} 
                               type="number" 
                               id="filter-price-to"
                               ref={this.inputTo}
                               defaultValue={max}
                               onChange={handleChange}
                               onKeyDown={this.handleKeyDown} />

                        <span className={`filter__error ${errorto || errorfrom ? 'filter__error_show' : ''}`}>
                            {errortype}
                        </span>

                        <button className="filter__button" 
                                type="submit"
                                disabled={errorto || errorfrom}>Применить</button>
                    </fieldset>
               </form>
    }
}

export default RangeFilter;
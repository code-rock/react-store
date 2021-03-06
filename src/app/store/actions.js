import * as types from './types';

export const changeNumberInputValue = (id, value) => {
    return { 
        type: types[`${id.toUpperCase()}_CHANGE`], 
        [id]: value 
    }
}
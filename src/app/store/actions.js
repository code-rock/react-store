import * as types from './types';
import { getTogglePropertyFromUrl } from '../utils/searchParamsUrl';

export const clearForm = () => ({ type: types.CLEAR_FORM });

export const changeActivePage = (activePage) => ({ 
    type: types.ACTIVE_PAGE_CHANGED,
    payload: Number(activePage)
});

export const changeActiveCategory = ({ target: { value }}) => ({ 
    type: types.ACTIVECATEGORY_CHANGE, 
    activeCategory: getTogglePropertyFromUrl('category', value) 
});

export const changeNumberInputValue = (id, value) => ({ 
    type: types[`${id.toUpperCase()}_CHANGE`], 
    [id]: value 
});
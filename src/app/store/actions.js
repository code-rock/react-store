import * as types from './types';
import { getTogglePropertyFromUrl } from '../utils/searchParamsUrl';

export const changeActivePage = (activePage) => ({ 
    type: types.ACTIVE_PAGE_CHANGED,
    payload: Number(activePage)
});

export const changeActiveCategory = ({ target: { value }}) => ({ 
    type: types.ACTIVECATEGORY_CHANGE, 
    activeCategory: getTogglePropertyFromUrl('category', value) 
});
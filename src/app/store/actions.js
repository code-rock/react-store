import * as types from './types';
import { getTogglePropertyFromUrl } from '../utils/searchParamsUrl';
import { setUniquePropertyToUrl } from '../utils/searchParamsUrl';

export const clearForm = () => ({ type: types.CLEAR_FORM });

// export const changeActivePage = (activePage) => {
//     // setUniquePropertyToUrl('pageNum', activePage,  `Page ${activePage}`);
//     return { 
//         // type: types.ACTIVE_PAGE_CHANGED,
//         // payload: Number(activePage)
//     }
// }

export const changeActiveCategory = ({ target: { value }}) => {
    //setUniquePropertyToUrl('pageNum', 1,  `Page ${1}`);
    return { 
        type: types.ACTIVECATEGORY_CHANGE, 
        activeCategory: getTogglePropertyFromUrl('category', value) 
    }
}

export const changeNumberInputValue = (id, value) => {
   // setUniquePropertyToUrl('pageNum', 1,  `Page ${1}`);
    return { 
        type: types[`${id.toUpperCase()}_CHANGE`], 
        [id]: value 
    }
}
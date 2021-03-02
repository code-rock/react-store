import { getMultiplePropertyFromSearch } from '../../utils/searchParamsUrl';

const getActiveCategoryFromUrl = (search) => {
    console.log(search, 'search')
    return getMultiplePropertyFromSearch(search, 'category');
}

export default getActiveCategoryFromUrl;
export default function filterChangeReducer(state, action) {
    console.log(action.type,action);
    switch(action.type) {
        case 'PRICEMIN_CHANGE': {
            return { 
                ...state, 
                pricemin: action.pricemin
            };
        }
        case 'PRICEMAX_CHANGE': {
            return { 
                ...state, 
                pricemax: action.pricemax
            };
        }
        case 'DISCOUNT_CHANGE': {
            return { 
                ...state, 
                discount: action.discount
            };
        }
        case 'ACTIVECATEGORY_CHANGE': {
            return { 
                ...state, 
                activeCategory: action.activeCategory
            };
        }
        case 'SHOWING_PRODUCTS_CHANGE': {
            return { 
                ...state, 
                productsWorthShowing: action.productsWorthShowing
            };
        }
        default: {
            return state
        }
    }
}
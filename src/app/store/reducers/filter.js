import { initialState } from '../index';
import { LOCATION_CHANGE } from 'connected-react-router';
import { CLEAR_FILTERS } from '../types';

export default function filterReducer(state = initialState, action) {
    switch(action.type) {
        case LOCATION_CHANGE: {
            if (action.payload.location.state) {
                return { 
                    ...state, 
                    ...action.payload.location.state,
                };
            } else { 
                return state
            }
        }
        case CLEAR_FILTERS: {
            return initialState;
        }
        default: {
            return state
        }
    }
}
import { initialState } from '../index';
import { LOCATION_CHANGE } from 'connected-react-router';

export default function filterReducer(state = initialState, action) {
    switch(action.type) {
        case LOCATION_CHANGE: {
            if (action.payload.location.state) {
                return { 
                    ...state, 
                    ...action.payload.location.state
                };
            } else {
                return state
            }
        }
        default: {
            return state
        }
    }
}
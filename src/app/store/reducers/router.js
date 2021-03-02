import { CALL_HISTORY_METHOD } from 'connected-react-router';

const initialRoute = {
    pathname: '',
    search: '',
    hash: '',
  }
  
export default function routerReducer(state = initialRoute, action) {
    console.log(state, action, 'state, action')
    switch(action.type) {
      case CALL_HISTORY_METHOD: {
      console.log(state, action, 'state, action')
      return state;
      }
      default: {
          return state
      }
   }
} 
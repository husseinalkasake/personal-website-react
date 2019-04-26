import initialState from './state';
import { SHOW_MORE_INFO, UPDATE_MORE_INFO_KEY } from './action.types';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_MORE_INFO:
        return { 
          ...state,
          showMoreInfo: action.payload !== undefined && action.payload !== null ? action.payload : !state.showMoreInfo
        };
      case UPDATE_MORE_INFO_KEY:
        return Object.assign({}, state, {showMoreInfo: true, projectMoreInfoKey: action.payload });
      default:
        return state
    }
  }
  
export default rootReducer;
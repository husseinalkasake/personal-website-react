import initialState from './state';
import { SHOW_MORE_INFO, UPDATE_SIDE_VIEW } from './action.types';

const rootReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
      case SHOW_MORE_INFO:
        newState = { ...state, showMoreInfo: action.payload };
        debugger;
        return newState;
      case UPDATE_SIDE_VIEW:
        newState = { ...state, sideViewData: action.payload };
        debugger;
        return newState;
      default:
        return state
    }
  }
  
export default rootReducer;
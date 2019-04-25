import initialState from './state';
import { SHOW_MORE_INFO, UPDATE_SIDE_VIEW } from './action.types';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_MORE_INFO:
        return { ...state, showMoreInfo: !state.showMoreInfo };
      case UPDATE_SIDE_VIEW:
        return { ...state, sideViewData: action.payload };
      default:
        return state
    }
  }
  
export default rootReducer;
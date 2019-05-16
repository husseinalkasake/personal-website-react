import initialState from './state';
import { 
  SHOW_MORE_INFO,
  SHOW_SIDE_MENU,
  CLOSE_MENUS,
  UPDATE_MORE_INFO_KEY 
} from './action.types';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_MORE_INFO:
        return { 
          ...state,
          showMoreInfo: action.payload !== undefined && action.payload !== null ? action.payload : !state.showMoreInfo
        };
      case SHOW_SIDE_MENU:
        return { 
          ...state,
          showSideMenu: action.payload !== undefined && action.payload !== null ? action.payload : !state.showSideMenu
        };
      case CLOSE_MENUS:
        return {...state, showMoreInfo: false, showSideMenu: false};
      case UPDATE_MORE_INFO_KEY:
        return Object.assign({}, state, {showMoreInfo: true, showSideMenu: false, projectMoreInfoKey: action.payload });
      default:
        return state;
    }
  }
  
export default rootReducer;
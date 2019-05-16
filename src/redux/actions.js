import { 
    SHOW_MORE_INFO,
    SHOW_SIDE_MENU,
    CLOSE_MENUS,
    UPDATE_MORE_INFO_KEY
} from './action.types';

export function showMoreInfo (showMoreInfo) {
    return {
        type: SHOW_MORE_INFO,
        payload: showMoreInfo
    };
};

export function showSideMenu (showSideMenu) {
    return {
        type: SHOW_SIDE_MENU,
        payload: showSideMenu
    };
};

export function closeMenus () {
    return {
        type: CLOSE_MENUS
    };
};

export function updateMoreInfoKey(moreInfoKey) {
    return {
        type: UPDATE_MORE_INFO_KEY,
        payload: moreInfoKey
    };
};
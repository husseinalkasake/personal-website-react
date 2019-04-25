import { SHOW_MORE_INFO, UPDATE_SIDE_VIEW } from './action.types';

export function showMoreInfo () {
    return {
        type: SHOW_MORE_INFO
    };
};

export function updateSideView (sideViewData) {
    return {
        type: UPDATE_SIDE_VIEW,
        payload: sideViewData
    };
};
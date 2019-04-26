import { SHOW_MORE_INFO, UPDATE_MORE_INFO_KEY } from './action.types';

export function showMoreInfo (showMoreInfo) {
    return {
        type: SHOW_MORE_INFO,
        payload: showMoreInfo
    };
};

export function updateMoreInfoKey(moreInfoKey) {
    return {
        type: UPDATE_MORE_INFO_KEY,
        payload: moreInfoKey
    };
};
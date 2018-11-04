import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data)
        default:
            return state;
    }
    // if (action.type === constants.SEARCH_FOCUS) {
    //     return state.set('focused', true);
    // }

    // if (action.type === constants.SEARCH_BLUR) {
    //     return state.set('focused', false);
    // }

    // if (action.type === constants.CHANGE_LIST) {
    //     return state.set('list', action.data);
    //     // console.log(action);
    // }

    // return state;
}
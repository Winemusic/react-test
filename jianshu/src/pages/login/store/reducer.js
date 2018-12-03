import { fromJS } from 'immutable';
import * as constans from './constants'

const defaultState = fromJS({
    login: false
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case constans.CHANGE_LOGIN:
            return state.set('login', action.value)
        case constans.CHANGE_LOGOUT:
            return state.set('login', action.value)
        default:
            return state;
    }
}
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}
/**
 * reducer 必须是个纯函数
 * 1.reducer可以接受state，但绝不能修改state
 * 2.纯函数指的是，给定固定输入，就一定有一个固定输出，而不会有任何副作用(例如不能有跟new Date，setTimeOut，Ajax等异步请求)
 */
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState;
    }

    return state;
}
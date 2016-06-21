/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import * as types from './../actions/types';
export default function (state = {skip: 1}, action = {}) {
    switch (action.type) {
        //跳转
        case types.SKIP:
            return {...state, skip: state.skip - 1, flag: action.flag};
            break;
        case types.SHOW:
            //过滤显示类
            return Object.assign({}, state, {flag: action.flag});
            break;
        case types.GETDATA:
            return Object.assign({}, state, {data: action.data || [], time: action.time});
            break;
        case types.MESSAGE:
            return Object.assign({}, state, {message: action.message || [], time: action.time});
            break;
        default:
            return state;
    }
}
/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import * as types from './../actions/types';
/**
 *@description use get the params
 */
export default function (state = {skip: 3}, action = {}) {
    switch (action.type) {
        //跳转
        case types.SKIP:
            return {...state, skip: state.skip - 1};
            break;
        case types.SHOW:
            //过滤显示类
            return Object.assign({}, state, {flag: action.flag || false});
            break;
        case types.GETDATA:
            return Object.assign({}, state, {data: action.data || [], time: action.time});
            break;
        case types.MESSAGE:
            return Object.assign({}, state, {message: action.data || [], time: action.time});
            break;
        case types.SHOPPING:
            return Object.assign({}, state, {shopping: action.data || [], time: action.time});
            break;
        case types.STOREMSG:
            return Object.assign({}, state, {storemsg: action.data || [], time: action.time});
            break;
        case types.LOGIN:
            return Object.assign({}, state, {
                user: action.user,
                sid: action.sid,
                check: action.check,
                uflag: action.uflag || false
            });
            break;
        default:
            return state;
    }
}
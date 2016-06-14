/**
 * Created by slowsay on 16/6/13.
 */
import * as types from './../actions/types';

export default function (state = {skip: 1}, action = {}) {
    switch (action.type) {
        case types.SKIP:
            return {...state, skip: state.skip - 1};
            break;
        case types.SHOW:
            //过滤显示类
            return Object.assign({}, state, {visibilityFilter: action.filter});
            break;
        default:
            return state;
    }
}
/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import * as types from './../actions/types';

export default function (state = {}, action = {}) {
    switch (action.type) {
        case types.ADD:
            return {...state, count: state.count || 0 + 1};
            break;
        case types.DELETE:
            return {...state, count: state.count || 0 - 1};
            break;
        default:
            return state;
    }

}
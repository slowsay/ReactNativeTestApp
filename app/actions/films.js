/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import * as types from './types';
export function add() {
    return {
        type: types.ADD
    };
}
export function del() {
    return {
        type: types.DELETE
    };
}

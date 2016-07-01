/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import * as types from './types';
//添加
export function add() {
    return {
        type: types.ADD
    };
}
//删除
export function del() {
    return {
        type: types.DELETE
    };
}


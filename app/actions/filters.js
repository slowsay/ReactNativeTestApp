/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import * as types from './types';
//显示
export function show(flag) {
    return {
        type: types.SHOW,
        flag: flag
    };
}
//跳过
export function skip(flag) {
    return {
        type: types.SKIP,
        flag: flag
    };
}
//数据
export function getData(data) {
    return {
        type: types.GETDATA,
        data: data,
        time: Date.now()
    }
}
//消息
export function getMessage(data) {
    return {
        type: types.MESSAGE,
        message: data,
        time: Date.now()
    }
}

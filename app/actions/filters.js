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
    };
}
//消息
export function getMessage(data) {
    return {
        type: types.MESSAGE,
        data: data,
        time: Date.now()
    };
}
//商品信息
export function getStore(data) {
    return {
        type: types.STOREMSG,
        data: data,
        time: Date.now()
    };
}
//购物车
export function shopping(data) {
    return {
        type: types.SHOPPING,
        data: data,
        time: Date.now()
    }
}
//用户验证
export function login(user, id, check, flag) {
    "use strict";
    return {
        type: types.LOGIN,
        user: user,
        sid: id,
        check: check,
        uflag: flag,
        time: Date.now()
    }
}
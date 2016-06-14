/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import * as types from './types';
export function show() {
    return {
        type: types.SHOW
    };
}
export function skip() {
    return {
        type: types.SKIP
    };
}
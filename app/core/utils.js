/**
 * Created by slowsay on 16/6/3.
 */
import React from 'react';
import { PixelRatio } from 'react-native';
import Dms from 'Dimensions';
//redux
import * as reducers from './../reducer';
const Utils = {
    ratio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(),
    /**
     *@description 获取屏幕尺寸
     */
    size: {
        width: Dms.get('window').width,
        height: Dms.get('window').height
    },
    ajax: function (obj) {
        var request = new XMLHttpRequest();
        request.onload = function () {
            return obj.success(request.responseText);
        };
        request.ontimeout = function () {
            console.log('Timeout');
            console.log(request.responseText);
            return obj.timeout(request.responseText);
        };
        request.onerror = function () {
            console.log('General network error');
            console.log(request.responseText);
            return obj.error(request.responseText);
        };
        request.open(obj.method || 'GET', obj.url);
        request.send();
    },
    getObj: function (obj) {
        for (let i of Object.keys(obj)) {
            return console.log(i, obj[i]);
        }
    },
    nslog: function (str) {
        "use strict";
        //console.log(str);
    }
}
export default Utils;
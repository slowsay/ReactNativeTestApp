/**
 * Created by slowsay on 16/6/3.
 */
import React from 'react';
import { PixelRatio } from 'react-native';
import Dms from 'Dimensions';
const Utils = {
    ratio: PixelRatio.get(),
    pixel: 1 / PixelRatio.get(),
    /**
     *@description 获取屏幕尺寸
     */
    size: {
        width: Dms.get('window').width,
        height: Dms.get('window').height
    }
}
export default Utils;
/**
 * Created by slowsay on 16/6/7.
 */


import React,{Component} from 'react';
import {PushNotificationIOS,View,Text,ScrollView,TouchableHighlight,StyleSheet,Button,AlertIOS} from 'react-native';
import Util from './../../core/utils';

class Buttons extends Component {
    componentWillMount() {
        PushNotificationIOS.addEventListener('notification', this._noticeHandle);
    }

    componentWillUnmount() {
        PushNotificationIOS.removeEventListener('notification', this._noticeHandle);
    }

    _noticeHandle(e) {
        //AlertIOS.alert('通知', e.getMessage());
        PushNotificationIOS.presentLocalNotification({
            alertBody: e.getMessage()
        });
        PushNotificationIOS.getApplicationIconBadgeNumber((num) => {
            let add = parseInt(e.getBadgeCount(), 10);
            PushNotificationIOS.setApplicationIconBadgeNumber(num + add);
        });
    }


    render() {
        return (
            <TouchableHighlight activeOpacity={1} style={[styles.btn,{backgroundColor:this.props.color}]}
                                onPress={this.props.onPress}>
                <Text style={styles.font}>{this.props.label}</Text>
            </TouchableHighlight>
        );
    }
}

export default class extends Component {
    static propTypes = {
        setText: React.PropTypes.string.isRequired
    }

    _onPress() {
        require('RCTDeviceEventEmitter').emit('remoteNotificationReceived', {
            aps: {
                alert: '已打开通知栏',
                bage: '1',
                sound: 'default'
            }
        });
    }

    //添加标记数
    _onPressAddnum() {
        PushNotificationIOS.setApplicationIconBadgeNumber(5);
    }

    //清标记数
    _onPressClearnum() {
        PushNotificationIOS.setApplicationIconBadgeNumber(0);
    }

    render() {
        PushNotificationIOS.requestPermissions();
        //添加标记数
        PushNotificationIOS.setApplicationIconBadgeNumber(5)
        return (
            <View style={styles.container}>
                <Buttons color="#24bf2f" onPress={()=>{this._onPress()}}
                         label="通知"/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', padding: 10
    },
    btn: {
        width: Util.size.width - 20, padding: 10, borderRadius: 4, margin: 10
    },
    font: {
        fontSize: 16,
        textAlign: 'center', color: '#fff'
    }
});
/**
 * Created by slowsay on 16/6/3.
 */
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,SegmentedControlIOS,ScrollView,PanResponder
} from 'react-native';
import Util from './../../core/utils';
import Notice from './notiice';
class Userbox extends Component {
    constructor() {
        super();
        this.state = {}
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        });
    }

    render() {
        return <View {...this._panResponder.panHandlers} >
        </View>
    }
}

export default class extends Component {
    constructor() {
        super();
        this.state = {
            msg: '我的淘宝'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Userbox />
                <View>
                    <Text style={styles.welcome}>
                        {this.state.msg}
                    </Text>
                    <View>
                        <SegmentedControlIOS values={['文章','消息','设置']} selectedIndex={0} tintColor='#000'/>
                    </View>
                    <Notice setText="fuckyou"/>
                    <ScrollView>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

/**
 * @description 样式定义
 *
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff', marginTop: 20
    },
    welcome: {
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
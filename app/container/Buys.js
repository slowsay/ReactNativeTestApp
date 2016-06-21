/**
 * Created by slowsay on 16/6/3.
 */
import React,{Component} from 'react';
import {
    View,StyleSheet,Image,Text,TouchableHighlight,StatusBar,Navigator
} from 'react-native';


export default class extends Component {
    constructor() {
        super();
        this.state = {
            msg: '购物车'
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>
                    home:{this.state.msg}
                </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
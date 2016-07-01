/**
 * Created by slowsay on 16/6/22.
 */
import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,AlertIOS} from 'react-native';
/**
 *@description 组件
 */
import Util from './../core/utils';
export default class extends Component {
    constructor() {
        super();
        this.state = {
            tel: '',
            telcode: ''
        }
    }

    _onPress() {
        const _tel = this.state.tel;
        const _code = this.state.telcode;
        if (_tel.length > 10) {
            if (_code.length > 3) {
                /**
                 *@description 调用登录接口
                 */
                const {actions}=this.props;
                fetch('https://api.github.com/search/repositories?q=javascript&sort=stars', {
                    method: 'POST',
                    body: JSON.stringify({
                        user: _tel, checkcode: _code
                    })
                }).then(res=>res.text()).then(res=> {
                    let _data = JSON.parse(res);
                    actions.login(_tel, Math.ceil(Math.random() * 100), 123, true);
                    this.props.go();
                });
            }
            else {
                AlertIOS.alert('提示', '请输入正确的验证码');
            }

        }
        else {
            AlertIOS.alert('提示', '请输入正确的手机号');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput maxLength={12} style={styles.inputbox} placeholder="请输入手机号"
                               clearButtonMode='while-editing'
                               onChangeText={(text)=>this.setState({tel:text})}
                               keyboardType='numeric'
                               value={this.state.tel}/>
                </View>
                <View>
                    <TextInput maxLength={4} style={styles.inputbox} placeholder="请输入手机号验证码"
                               onChangeText={(text)=>this.setState({telcode:text})}
                               keyboardType='numeric'
                               value={this.state.telcode}/>
                </View>
                <TouchableOpacity onPress={()=>this._onPress()}>
                    <Text style={styles.btn}>加入</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#ffcc00'
    },
    btn: {
        backgroundColor: '#f0f0f0',
        padding: 4, margin: 8
    },
    inputbox: {
        fontSize: 12,
        padding: 4,
        margin: 4,
        width: Util.size.width / 2 - 8, height: 30,
        backgroundColor: '#fff', borderWidth: 1, borderColor: '#f0f0f0'
    }
});
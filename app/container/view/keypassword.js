/**
 * Created by slowsay on 16/6/6.
 */
import React,{Component} from 'react';
import {
    StyleSheet,Text,TouchableHighlight,StatusBar,View
} from 'react-native';
import Util from './../../core/utils';
//import Password from 'react-native-gesture-password';


//设置密码区域
class SetPassword extends Component {
    static propTypes = {
        password: React.PropTypes.string.isRequired,
        setpassword: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        console.log('>>>>>>>>', props, '<<<<<<', this.props.password);
        this.state = {
            password: this.props.password,
            status: 'normal',
            message: '请输入密码!'
        }
    }

    _onStart() {
        if (this.state.password === '') {
            this.setState({
                message: '请设置你的密码'
            });
        } else {
            this.setState({
                message: '确认输入你的密码'
            })
        }
    }

    _onEnd(ps) {
        if (this.state.password === '') {
            this.state.password = ps;
            this.setState({
                message: '请输入你的密码',
                status: 'normal'
            });
        }
        else {
            if (ps === this.state.password) {
                this.props.setpassword(ps)
                this.setState({
                    message: '你的密码已经设置成功',
                    status: 'yes'
                });
            }
            else {
                this.setState({
                    message: '请再试一次输入密码',
                    status: 'no'
                });
            }

        }

    }

    render() {
        return (
            <View><Text>slowsay</Text></View>
        );
    }
}

export default class extends Component {
    constructor() {
        super();
        this.state = {
            password: 'fuckyou',
            enter: false
        }
    }

    componentDidMount() {
        StatusBar.setBarStyle(1);
    }

    _setPassword(ps) {
        console.log(ps);
        this.setState({password: ps});
    }

    render() {
        return (<View style={styles.container}>
            <SetPassword setpassword={(password)=>{this._setPassword(password)}}
                         password={this.state.password}></SetPassword>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
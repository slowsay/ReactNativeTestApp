/**
 * Created by slowsay on 16/6/6.
 */
import React,{Component} from 'react';
import {
    StyleSheet,Text,TouchableHighlight,ScrollView,StatusBar,View
} from 'react-native';
import Util from './../utils';
import Password from 'react-native-gesture-password';

export class EnterPassword extends Component {
    static propTypes = {
        password: React.PropTypes.string.isRequired,
        enterPassword: React.PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            password: this.props.password,
            message: 'Unlock with your password.',
            status: 'normal',
        };
    }

    onEnd(password) {
        if (password == this.state.password) {
            this.setState({
                status: 'right',
                message: 'Password is right, success.'
            });
            this.props.enterPassword();
        } else {
            this.setState({
                status: 'wrong',
                message: 'Password is wrong, try again.'
            });
        }
    }

    onStart() {
        this.setState({
            status: 'normal',
            message: 'Unlock your password.'
        });
    }

    render() {
        return (
            <PasswordGesture
                style={styles.setPg}
                ref='pg'
                status={this.state.status}
                message={this.state.message}
                allowCross={true}
                onStart={() => this.onStart()}
                onEnd={(password) => this.onEnd(password)}
            />
        );
    }
}

//设置密码区域
class SetPassword extends Component {
    static propTypes = {
        password: React.PropTypes.string.isRequired,
        setpassword: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
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
            <Password status={this.state.status} message={this.state.message} allowCross={true}
                      onStart={()=>{this._onStart()}} onEnd={(password)=>{this._onEnd(password)}}/>
        );
    }
}

export default class extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            enter: false
        }
    }

    componentDidMount() {
        StatusBar.setBarStyle(1);
    }

    _setPassword(ps) {
        this.setState({password: ps});
    }

    render() {
        return (<View style={styles.container}>
            {
                this.state.enter ? <View /> : <SetPassword setpassword={(password)=>{this._setPassword(password)}}
                                                           password={this.state.password}></SetPassword>
            }
            {this.state.enterApp ?
                <View style={styles.app}><Text style={styles.appText}>You are in the app!</Text></View> : <View></View>}
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
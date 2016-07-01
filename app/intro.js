/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
/**
 *@description 组件
 */
import * as filtersActions from './actions/filters';
import Videomc from './component/videobox';
import Util from './core/utils';
import Index from './container';
import Login from './component/login';
class Intros extends Component {
    constructor() {
        super();
        this.state = {
            skip: false,
            islogin: false,
            setime: 0, skiptime: 1500
        }
    }

    componentDidMount() {
        //skip banner
        //this._setTimeout();
    }

    _setTimeout() {
        const {state,actions}=this.props;
        let _this = this;
        if (!this.state.skip) {
            let _setime = setTimeout(function () {
                clearTimeout(_setime);
                if (state.skip > 1)
                    actions.skip(), _this._setTimeout();
                else
                    _this.setState({skip: true});
            }, this.state.skiptime);
        }
    }

    _onPress() {
        const {actions}=this.props;
        /**
         *@description 调用数据接口
         */
            //fetch('https://api.github.com/search/repositories?q=javascript&sort=stars').then(res=>res.text()).then(res=> {
            //actions.shopping(JSON.parse(res));
        actions.getMessage([{
            n: 'jack',
            src: 'round.png'
        }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {
            n: 'list',
            src: 'round.png'
        }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {
            n: 'list',
            src: 'round.png'
        }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {
            n: 'list',
            src: 'round.png'
        }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}, {
            n: 'list',
            src: 'round.png'
        }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}]);
        actions.getStore([{n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic0.png'},
            {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic1.png'},
            {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic2.png'},
            {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic0.png'},
            {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic1.png'},
            {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic2.png'},
            {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic0.png'},
            {n: '林木家具多功能创意白色美式梳妆台 实木梳妆台带收...', price: 7500.0, src: 'pic1.png'}]);
        this.setState({islogin: true, skip: true});
        //});

    }

    _goPress() {
        this._onPress();
    }

    render() {
        Util.nslog('----------intro----------');
        const {state,actions}=this.props;
        return (<View style={styles.container}>
            {this.state.skip ? this.state.islogin ? <Index state={state} actions={actions}/> :
                <Login go={()=>this._goPress()} state={state} actions={actions}/> : <View>
                <Videomc />
                <View style={styles.skip}>
                    <TouchableOpacity onPress={()=>this._onPress()}>
                        <Text>跳过{state.skip}</Text>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>);
    }
}
//state
function stateProps(state) {
    return {state: state.filters};
}
//dispatch
function dispatchProps(dispatch) {
    return {actions: bindActionCreators(filtersActions, dispatch)};
}
export default connect(stateProps, dispatchProps)(Intros);
/**
 *@decription style
 */
const styles = StyleSheet.create({
    container: {
        width: Util.size.width, height: Util.size.height
    },
    skip: {
        position: 'absolute', top: 20, right: 10
    }
});
/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as filtersActions from './actions/filters';
import Videomc from './component/videobox';
import Util from './core/utils';
import Index from './container';
class Intros extends Component {
    componentDidMount() {
        //loading user loginmessage
        const {actions}=this.props;
        fetch('https://api.github.com/search/repositories?q=javascript&sort=stars').then(res=>res.text()).then(res=> {
            //    let _data = JSON.parse(res);
            let arr = [{
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
            }, {n: 'list', src: 'round.png'}, {n: 'list', src: 'round.png'}]
            actions.getMessage(arr);
        });
    }

    render() {
        console.log('----------intro----------');
        const {state,actions,message}=this.props;
        return (<View style={styles.container}>
            {state.skip < 1 ? <Index state={state} message={message} actions={actions}/> : <Videomc {...actions} />}
            {state.skip < 1 ? <View /> : <View style={styles.skip}>
                <TouchableHighlight style={styles.btn} onPress={actions.skip}>
                    <Text style={styles.font}>跳过{state.skip}</Text>
                </TouchableHighlight>
            </View> }
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
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height: 20
    },
    btn: {
        marginTop: 30, marginRight: 20
    },
    font: {
        fontSize: 16,
        textAlign: 'right', color: '#fff'
    }
});
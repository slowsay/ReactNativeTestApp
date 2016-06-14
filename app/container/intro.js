/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as filtersActions from './../actions/filters';
import Videomc from './view/videobox';
import Util from './../core/utils';
import Index from './index';
class Intros extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {state,actions}=this.props;
        //let setime = setTimeout(function () {
        //    clearTimeout(setime);
        //    actions.skip();
        //}, 1000)
        return (<View style={styles.container}>
            {state.skip < 1 ? <Index /> : <Videomc {...actions} />}
            {state.skip < 1 ? <View /> : <View style={styles.skip}>
                <TouchableHighlight style={styles.btn} onPress={actions.skip}>
                    <Text style={styles.font}>跳过</Text>
                </TouchableHighlight>
            </View> }
        </View>);
    }
}
export default connect((state) => ({
        state: state.filters
    }),
    (dispatch)=> ({
        actions: bindActionCreators(filtersActions, dispatch)
    })
)(Intros);

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
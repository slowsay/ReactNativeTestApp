/**
 * Created by slowsay on 16/6/12.
 */
'use struct';
import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as filmsActions from './../actions/films';

class test extends Component {
    constructor(props) {
        super(props);
    }

    _onPress() {

    }

    render() {
        const {state,actions}=this.props;
        return (<View style={styles.container} counts={state.films} {...actions}>
            <TouchableHighlight onPress={actions.add}>
                <Text>test</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={actions.del}>
                <Text>{state.count}</Text>
            </TouchableHighlight>
        </View>);
    }
}
export default connect((state) => ({
        state: state.films
    }),
    (dispatch)=> ({
        actions: bindActionCreators(filmsActions, dispatch)
    })
)(test);

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }
});
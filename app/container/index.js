/**
 * Created by slowsay on 16/6/13.
 */
'use strict';
import React,{ Component } from 'react';
import {StyleSheet,Navigator} from 'react-native';
import Util from './../core/utils';
//tabar list
import Tarbars from './../component/tarbar';
export default class extends Component {
    _component(route, navigator) {
        const Component = route.component;
        if (route.component)
            return <Component {...route.params} route={route} store={this.props} navigator={navigator}/>;
    }

    render() {
        console.log('----------index----------');
        return (
            <Navigator
                initialRoute={{name:'test',index:0,component:Tarbars}}
                configureScene={(route)=> Navigator.SceneConfigs.PushFromRight}
                renderScene={(route,navigator)=>this._component(route,navigator)}
            />
        );
    }
}
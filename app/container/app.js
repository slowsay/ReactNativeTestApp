/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import React,{ Component } from 'react';
import {AppRegistry, View} from 'react-native';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//redux
import * as reducers from './../reducer';
import Intro from './intro';
export  default class extends Component {
    render() {
        return (<Provider store={createStore(combineReducers(reducers))}>
            <Intro />
        </Provider>);
    }
}
/**
 * Created by slowsay on 16/6/13.
 */
'use struct';
import React,{ Component } from 'react';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
//redux
import * as reducers from './reducer';
import Intro from './intro';
const midware = applyMiddleware(thunk)(createStore);
const store = midware(combineReducers(reducers));
export  default class extends Component {
    render() {
        return (<Provider store={store}>
            <Intro />
        </Provider>);
    }
}
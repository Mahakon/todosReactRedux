'use strict';

//import {combineReducers} from 'redux';
//import todosReducer from './todosReducer';
//import filterReduser from './filterReducer';

var Redux = require('redux');
var combineReducers = Redux.combineReducers;
var todosReducer = require('./todosReducer');
var filterReduser = require('./filterReducer');

var appReducer = combineReducers({
    todosArray: todosReducer,
    currentFilter: filterReduser
});

module.exports = appReducer;
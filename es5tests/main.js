'use strict';

//import { createStore } from 'redux';
//import appReducer from './modules/reducers/appReducer'
//import TodosItem from './componets/TodosItem';
var Redux = require('redux');
var createStore = Redux.createStore;
var appReducer = require('./modules/reducers/appReducer');
var AddTodos = require('./componets/AddTodos');
var addTodosAction = require('./modules/actions/addTodosAction');
var ReactDom = require('react-dom');
var React = require('react');

var init = function init() {
    function render() {
        console.log("jvhk");
        ReactDom.render(addTodos.render(), document.querySelector(".todos-list").lastElementChild);
    }
    var store = createStore(appReducer);
    console.log(store.getState());
    var addTodos = new AddTodos(store);
    store.subscribe(render);
    //render();
    //store.dispatch(addTodosAction("maha"));
    //console.log(store.getState());

};

document.addEventListener('DOMContentLoaded', init);
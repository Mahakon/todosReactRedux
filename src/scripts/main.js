//import { createStore } from 'redux';
//import appReducer from './modules/reducers/appReducer'
//import TodosItem from './componets/TodosItem';
var Redux = require('redux');
var createStore = Redux.createStore;
var appReducer = require('./modules/reducers/appReducer');
var AddTodos = require('./componets/AddTodos');
var TodosList = require('./componets/todos-list/TodosList');
var TodosBar = require('./componets/todos-bar/TodosBar');
var ReactDOM = require('react-dom');
var React = require('react');

const updateStateOfViewTodosBar = (num) => {
    let todosBar = document.querySelector(".todos-actions-bar");

    if (num === 0) {
        todosBar.style.display = "none";
    } else {
        todosBar.style.display = "flex";
    }
}

function updateStateOfViewSellectAllButton(num) {
    let todosButton = document.querySelector(".todos-add_select-all");

    if (num === 0) {
        todosButton.style.visibility = "hidden";
    } else {
        todosButton.style.visibility = "visible";
    }
}

const init = () => {
    function render() {
        localStorage['redux-store'] = JSON.stringify(store.getState());
        ReactDOM.render(
            todosList.render(),
            document.querySelector(".todos-list")
        );
        ReactDOM.render(
            todosBar.todosCounter.render(),
            document.querySelector(".todos-actions-bar_counter-undone")
        );
        updateStateOfViewTodosBar(store.getState().todosArray.length);
        updateStateOfViewSellectAllButton(store.getState().todosArray.length);
    }

    const store = createStore(
        appReducer,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            {}
    );

    const addTodos = new AddTodos(store);
    const todosList = new TodosList(store);
    const todosBar = new TodosBar(store);

    store.subscribe(render);
    render();
}

document.addEventListener('DOMContentLoaded', init);


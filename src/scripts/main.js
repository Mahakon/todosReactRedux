var Redux = require('redux');
var createStore = Redux.createStore;
var appReducer = require('./modules/reducers/appReducer');
var AddTodos = require('./componets/AddTodos');
var TodosList = require('./componets/todos-list/TodosList');
var TodosBar = require('./componets/todos-bar/TodosBar');
var ReactDOM = require('react-dom');
var React = require('react');

const updateStateOfViewTodosBar = require('./utils/updateStateOfViewTodosBar');
const updateStateOfViewSellectAllButton = require('./utils/updateStateOfViewSellectAllButton');
const updateFocusFilter = require('./utils/updateFocusFilter');

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
        updateFocusFilter(store.getState().currentFilter);
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
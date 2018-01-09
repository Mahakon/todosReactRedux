//import { Component } from 'react';
//import addTodosAction from '../modules/actions/addTodosAction';

var addTodosAction = require('../modules/actions/addTodosAction');
var makeAllCompletedTodosAction = require('../modules/actions/makeAllCompletedTodosAction')

const TODOS_INPUT = ".todos-add_new-item";
const TODOS_SELECT_ALL_BUTTON = ".todos-add_select-all";
const ENTER_KEY_CODE = 13;

class AddTodos {
    constructor(store) {
        this.todoInput = document.querySelector(TODOS_INPUT);
        this.todoSelectAllButton = document.querySelector(TODOS_SELECT_ALL_BUTTON);
        this.totalNumOfTodosELements = (store.getState().todosArray.length) ?
                                            (store.getState().todosArray.length) : 0;
        this.store = store;

        this.todoInput.addEventListener('keypress', (event) => {
            if (event.keyCode === ENTER_KEY_CODE) {
                this.totalNumOfTodosELements = (store.getState().todosArray.length) ?
                    (store.getState().todosArray.length) : 0;
                store.dispatch(addTodosAction(event.target.value, this.totalNumOfTodosELements));
                //console.log(store.getState());
                event.target.value = "";
                this.totalNumOfTodosELements++;
            }
        });

        this.todoSelectAllButton.addEventListener('click', () => {
            for (let i = 0; i < store.getState().todosArray.length; i++) {
                store.dispatch(makeAllCompletedTodosAction());
            }
        });

    }

}

module.exports = AddTodos;
var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.Component;
var toggleTodosAction = require('../../modules/actions/toggleTodosAction');
var deleteTodosAction = require('../../modules/actions/deteleTodosAction');
var TodosItem = require('./TodosItem')

const TODOS_LIST = ".todos-list";
const TODOS_DELETE_BUTTON_CLASS_NAME = "todos-item_delete";
const TODOS_CHECKBOX_CLASS_NAME = ["todos-item_done-mark", "todos-item_undone-mark"];

var totalNumOfTodosELements = 0;
class TodosList extends React.Component {
    constructor(store) {
        super();
        this.todoList = document.querySelector(TODOS_LIST);
        this.store = store;
        this.todosItem = new TodosItem();

        this.todoList.addEventListener('click', (event) => {
            switch (event.target.className) {
                case TODOS_CHECKBOX_CLASS_NAME[0]:
                case TODOS_CHECKBOX_CLASS_NAME[1]: {
                    store.dispatch(toggleTodosAction(this.getIndex(event.target)));
                } break;

                case TODOS_DELETE_BUTTON_CLASS_NAME: {
                    store.dispatch(deleteTodosAction(this.getIndex(event.target)))
                } break;
            }
        });

    }

    getIndex(currentItem) {
        var items = this.todoList.childNodes[0].childNodes;
        currentItem = currentItem.parentNode.parentNode;

        for (let i = 0; i < items.length; i++) {
            if (items[i] === currentItem) {
                return i;
            }
        }
    }

    render() {
        console.log(this.store.getState());
        return React.createElement(
            "div",

            null,

            this.store.getState().todosArray.map((value, i) =>
                this.todosItem.renderTodosItem(
                    value,
                    i,
                    this.store.getState().currentFilter
                )
            )

        )
    }

}

module.exports = TodosList;
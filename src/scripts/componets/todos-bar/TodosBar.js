var deleteAllCompletedTodosAction = require(
    '../../modules/actions/deleteAllCompletedTodosAction'
);
const TodosFilters = require('./TodosFilters');
const TodosCounter = require('./TodosCounter');
const DELETE_ALL_COMPLETED_BUTTON_CLASS = ".todos-actions-bar_delete-done";

class TodosBar {
    constructor(store) {
        this.deleteAllComButton = document.querySelector(
                                    DELETE_ALL_COMPLETED_BUTTON_CLASS);

        new TodosFilters(store);
        this.todosCounter = new TodosCounter(store);

        this.deleteAllComButton.addEventListener('click', (event) => {
            store.dispatch(deleteAllCompletedTodosAction());
        });

    }

}

module.exports = TodosBar;
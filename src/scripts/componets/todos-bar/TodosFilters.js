var setFilterTodosAction = require(
    '../../modules/actions/setFilterTodosAction'
);
const TODOS_FILTERS_CLASS = ".todos-filters";
const FILTER_ALL = "todos-filter __all";
const FILTER_COMPLETED = "todos-filter __completed";
const FILTER_ACTIVE = "todos-filter __active";

class TodosFilters {
    constructor(store) {
        this.store = store;
        this.filters = document.querySelector(
            TODOS_FILTERS_CLASS);

        this.filters.addEventListener('click', (event) => {
            switch (event.target.className) {
                case FILTER_ALL : {
                    this.changeFilter(FILTER_ALL);
                } break;

                case FILTER_ACTIVE: {
                    this.changeFilter(FILTER_ACTIVE);
                } break;

                case FILTER_COMPLETED: {
                    this.changeFilter(FILTER_COMPLETED);
                } break;
            }

        });
    }

    changeFilter(filterName) {
        this.store.dispatch(setFilterTodosAction(filterName))
    }
}

module.exports = TodosFilters;
var todos = require('./todos');

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODOS': {
            return [
                ...state,
                todos(undefined, action)
            ];
        }

        case 'TOGGLE_TODOS': {
            return state.map(todosElement => todos(todosElement, action));
        }

        case 'DELETE_TODOS': {
            state = state.map(todosElement => todos(todosElement, action));
            let index = -1;
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === -1) {
                    index = i;
                    break;
                }
            }

            if (index > -1) {
                state.splice(index, 1);
            }


            state = state.map((todosElement, index) => {
                return {
                    id: index,
                    text: todosElement.text,
                    completed: todosElement.completed
                }
            });


            return state;
        }

        case 'MAKE_ALL_COMPLETED_TODOS': {
            return state.map(todosElement => todos(todosElement, action));
        }

        case 'DELETE_ALL_COMPLETED_TODOS': {
            state = state.map(todosElement => todos(todosElement, action));

            let i = 0;
            let size = state.length;

            while (size > 0) {
                if (state[i].id === -1) {
                    state.splice(i, 1);
                    i--;
                }

                i++;
                size--;
            }

            state = state.map((todosElement, index) => {
                return {
                    id: index,
                    text: todosElement.text,
                    completed: todosElement.completed
                }
            });

            return state;
        }

        default: {
            return state;
        }
    }
}

module.exports = todosReducer;
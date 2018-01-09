'use strict';

var todos = function todos(state, action) {
    switch (action.type) {
        case 'ADD_TODOS':
            {
                return {
                    id: action.id,
                    text: action.text,
                    completed: false
                };
            }break;

        case 'TOGGLE_TODOS':
            {
                if (state.id !== action.id) {
                    return state;
                }

                return {
                    id: state.id,
                    text: state.text,
                    completed: !state.completed
                };
            }break;
    }
};

module.exports = todos;
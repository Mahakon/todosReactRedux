'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//import todos from './todos';
var todos = require('./todos');

var todosReducer = function todosReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TODOS':
            {
                return [].concat(_toConsumableArray(state), [todos(undefined, action)]);
            }break;

        case 'TOGGLE_TODOS':
            {
                return state.map(function (todosElement) {
                    return todos(todosElement, action);
                });
            }

        default:
            {
                return state;
            }
    }
};

module.exports = todosReducer;
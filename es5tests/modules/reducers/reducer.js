'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_TODOS':
            {
                return [].concat(_toConsumableArray(state), [{
                    id: action.id,
                    text: action.text,
                    completed: false
                }]);
            }break;

        case 'TOGGLE_TODOS':
            {
                return state.map(function (todosElement) {
                    if (todosElement.id !== action.id) {
                        return todosElement;
                    }

                    return {
                        id: todosElement.id,
                        text: todosElement.text,
                        completed: !todosElement.completed
                    };
                });
            }

        default:
            {
                return state;
            }
    }
};

module.exports = reducer;
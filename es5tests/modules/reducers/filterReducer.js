"use strict";

var filterReducer = function filterReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "SHOW_ALL";
    var action = arguments[1];

    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            {
                return action.filter;
            }break;

        default:
            {
                return state;
            }
    }
};

module.exports = filterReducer;
'use strict';

var addTodosAction = function addTodosAction(text, id) {
    return {
        type: 'ADD_TODOS',
        id: id,
        text: text
    };
};

module.exports = addTodosAction;
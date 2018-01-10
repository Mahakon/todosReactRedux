'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _deepFreeze = require('deep-freeze');

var _deepFreeze2 = _interopRequireDefault(_deepFreeze);

var _todosReducer = require('../modules/reducers/todosReducer');

var _todosReducer2 = _interopRequireDefault(_todosReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testAddTodos = function testAddTodos() {
    var stateBefore = [];
    var action = {
        type: 'ADD_TODOS',
        id: 0,
        text: 'maha'
    };
    var stateAfter = [].concat(stateBefore, [{
        id: 0,
        text: 'maha',
        completed: false
    }]);

    (0, _deepFreeze2.default)(stateBefore);
    (0, _deepFreeze2.default)(action);

    (0, _expect2.default)((0, _todosReducer2.default)(stateBefore, action)).toEqual(stateAfter);
};

var testToggleTodos = function testToggleTodos() {
    var stateBefore = [{
        id: 0,
        text: 'kdj',
        completed: false
    }, {
        id: 1,
        text: 'kdj',
        completed: false
    }];
    var action = {
        type: 'TOGGLE_TODOS',
        id: 0
    };
    var stateAfter = [{
        id: 0,
        text: 'kdj',
        completed: true
    }, {
        id: 1,
        text: 'kdj',
        completed: false
    }];

    (0, _deepFreeze2.default)(stateBefore);
    (0, _deepFreeze2.default)(action);

    (0, _expect2.default)((0, _todosReducer2.default)(stateBefore, action)).toEqual(stateAfter);
};

testAddTodos();

console.log("test1 finished successful");

testToggleTodos();

console.log("test2 finished successful");
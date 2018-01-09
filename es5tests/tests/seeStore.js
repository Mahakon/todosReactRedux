'use strict';

var _todosReducer = require('../modules/reducers/todosReducer');

var _todosReducer2 = _interopRequireDefault(_todosReducer);

var _appReducer = require('../modules/reducers/appReducer');

var _appReducer2 = _interopRequireDefault(_appReducer);

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_appReducer2.default);

console.log("current state");
console.log(store.getState());
console.log("-------------");

console.log("Dispatch Add_todos");
store.dispatch({
    type: 'ADD_TODOS',
    id: 0,
    text: '0'
});
console.log("current state");
console.log(store.getState());
console.log("-------------");

console.log("Dispatch Add_todos");
store.dispatch({
    type: 'ADD_TODOS',
    id: 1,
    text: '1'
});
console.log("current state");
console.log(store.getState());
console.log("-------------");

console.log("Dispatch toggle_todos");
store.dispatch({
    type: 'TOGGLE_TODOS',
    id: 1
});
console.log("current state");
console.log(store.getState());
console.log("-------------");

console.log("Dispatch set_visibality_filter");
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});
console.log("current state");
console.log(store.getState());
console.log("-------------");
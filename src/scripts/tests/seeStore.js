import reducer from '../modules/reducers/todosReducer'
import appReducer from '../modules/reducers/appReducer'
import { createStore } from 'redux';

const store = createStore(appReducer);

console.log("current state");
console.log(store.getState());
console.log("-------------");

console.log("Dispatch Add_todos")
store.dispatch({
    type: 'ADD_TODOS',
    id: 0,
    text: '0'
});
console.log("current state");
console.log(store.getState());
console.log("-------------");

console.log("Dispatch Add_todos")
store.dispatch({
    type: 'ADD_TODOS',
    id: 1,
    text: '1'
});
console.log("current state");
console.log(store.getState());
console.log("-------------");

console.log("Dispatch toggle_todos")
store.dispatch({
    type: 'TOGGLE_TODOS',
    id: 1,
});
console.log("current state");
console.log(store.getState());
console.log("-------------");

console.log("Dispatch set_visibality_filter")
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});
console.log("current state");
console.log(store.getState());
console.log("-------------");
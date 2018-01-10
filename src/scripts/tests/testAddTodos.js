import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from '../modules/reducers/todosReducer';

const testAddTodos = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODOS',
        id: 0,
        text: 'maha'
    };
    const stateAfter = [
        ...stateBefore,
        {
            id: 0,
            text: 'maha',
            completed: false
        }
    ];


    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        reducer(stateBefore, action)
    ).toEqual(stateAfter);

};

const testToggleTodos = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'kdj',
            completed: false
        },
        {
            id: 1,
            text: 'kdj',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODOS',
        id: 0,
    };
    const stateAfter = [
        {
            id: 0,
            text: 'kdj',
            completed: true
        },
        {
            id: 1,
            text: 'kdj',
            completed: false
        }
    ];


    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        reducer(stateBefore, action)
    ).toEqual(stateAfter);

}

testAddTodos();

console.log("test1 finished successful")

testToggleTodos()

console.log("test2 finished successful")
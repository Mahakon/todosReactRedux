import expect from 'expect';
import deepFreeze from 'deep-freeze';
import reducer from '../src/scripts/modules/reducers/todosReducer';

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

const testDeleteTodos = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'first',
            completed: false
        },
        {
            id: 1,
            text: 'second',
            completed: false
        },


    ];
    const action = {
        type: 'DELETE_TODOS',
        id: 0,
    };
    const stateAfter = [
        {
            id: 0,
            text: 'second',
            completed: false
        }
    ];


    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        reducer(stateBefore, action)
    ).toEqual(stateAfter);

}

const testMakeAllCompletedTodos = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'first',
            completed: false
        },
        {
            id: 1,
            text: 'second',
            completed: true
        },
        {
            id: 2,
            text: 'third',
            completed: false
        }
    ];
    const action = {
        type: 'MAKE_ALL_COMPLETED_TODOS',
        id: 0,
    };
    const stateAfter = [
        {
            id: 0,
            text: 'first',
            completed: true
        },
        {
            id: 1,
            text: 'second',
            completed: true
        },
        {
            id: 2,
            text: 'third',
            completed: true
        }
    ];


    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        reducer(stateBefore, action)
    ).toEqual(stateAfter);

}

const testDeleteAllCompletedTodos = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'first',
            completed: false
        },
        {
            id: 1,
            text: 'second',
            completed: true
        },
        {
            id: 2,
            text: 'third',
            completed: false
        },
        {
            id: 3,
            text: 'forth',
            completed: true
        },
        {
            id: 4,
            text: 'firth',
            completed: false
        }
    ];
    const action = {
        type: 'DELETE_ALL_COMPLETED_TODOS'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'first',
            completed: false
        },
        {
            id: 1,
            text: 'third',
            completed: false
        },
        {
            id: 2,
            text: 'firth',
            completed: false
        }

    ];


    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        reducer(stateBefore, action)
    ).toEqual(stateAfter);

}

const testDefaultTodos = () => {
    const stateBefore = [];
    const action = {
        type: 'TODOS',
        id: 0,
        text: 'maha'
    };
    const stateAfter = [];


    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        reducer(stateBefore, action)
    ).toEqual(stateAfter);

}


describe('testreducer', () => {

    it('should be new state with new elem', () => {
        testAddTodos()
    });
    it('should be new state with 1 has change completed', () => {
        testToggleTodos()
    });
    it('should be new state without one', () => {
        testDeleteTodos()
    });
    it('all todos should have completed: true', () => {
        testMakeAllCompletedTodos()
    })
    it ('delete completed', () => {
        testDeleteAllCompletedTodos();
    })
    it ('test default', () => {
        testDefaultTodos()
    })

});

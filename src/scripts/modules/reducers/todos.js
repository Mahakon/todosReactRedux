const todos = (state, action) => {
    switch (action.type) {
        case 'ADD_TODOS': {
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        } break;

        case 'TOGGLE_TODOS': {
            if (state.id !== action.id){
                return state;
            }

            return {
                id: state.id,
                text: state.text,
                completed: !state.completed
            };
        } break;

        case 'DELETE_TODOS': {
            if (state.id !== action.id){
                return state;
            }

            return {
                id: -1,
                text: state.text,
                completed: state.completed
            }
        } break;

        case 'MAKE_ALL_COMPLETED_TODOS': {
            return {
                id: state.id,
                text: state.text,
                completed: true
            }
        } break;

        case 'DELETE_ALL_COMPLETED_TODOS': {
            if (!state.completed){
                return state;
            }

            return {
                id: -1,
                text: state.text,
                completed: state.completed
            }
        } break;

    }
}

module.exports = todos;
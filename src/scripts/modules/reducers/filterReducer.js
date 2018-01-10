const filterReducer = (state = "todos-filter __all", action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': {
            return action.filter;
        } break;

        default :{
            return state;
        }
    }
}

module.exports = filterReducer;
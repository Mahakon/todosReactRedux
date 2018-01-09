const setFilterTodosAction = (filterName) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: filterName
    }
}

module.exports = setFilterTodosAction;
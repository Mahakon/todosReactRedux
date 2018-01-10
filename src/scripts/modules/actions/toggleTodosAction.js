const toggleTodosAction = (id) => {
    return {
        type: 'TOGGLE_TODOS',
        id: id
    }
}

module.exports = toggleTodosAction;
const deleteTodosAction = (id) => {
    return {
        type: 'DELETE_TODOS',
        id: id
    }
}

module.exports = deleteTodosAction;
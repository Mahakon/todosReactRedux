import React from 'react'

import AddTodos from './todos-add/AddTodos'
import TodosList from './todos-list/TodosList'
import TodosBar from './todos-bar/TodosBar'

export default class TodosContainer extends React.Component {
    render() {
        return (
            <div>
                <AddTodos/>
                <TodosList/>
                <TodosBar/>
            </div>
        )
    }
}
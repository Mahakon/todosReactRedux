import React from 'react'
import AddTodos from './todos-add/AddTodos'
import TodosList from './todos-list/TodosList'
import TodosBar from './todos-bar/TodosBar'

export default class TodosContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AddTodos store={this.props.store}/>
                <TodosList store={this.props.store}/>
                <TodosBar store={this.props.store}/>
            </div>
        )
    }
}
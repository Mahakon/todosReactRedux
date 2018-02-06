import React from 'react'
import { connect } from 'react-redux'

import TodosDeleteAllCompletedButton from './TodosDeleteAllCompletedButton'
import TodosFilters from './TodosFilters'
import { connectedTodosCounter as TodosCounter }  from './TodosCounter'


class TodosBar extends React.Component{
    constructor(props) {
        super(props);
        this.setVisibility = this.setVisibility.bind(this);
    }

    setVisibility() {
        if (this.props.numTodosItems == 0) {
            return {
                display: "none"
            }
        }

        return {
            display: "flex"
        }
    }

    render() {
        return (
            <div className="todos-actions-bar" style={this.setVisibility()}>

                <TodosCounter/>

                <TodosFilters/>

                <TodosDeleteAllCompletedButton/>

            </div>
        )
    }

}

export default connect(
    state => ({
        numTodosItems: state.todosArray.length,
    }),
    null
)(TodosBar)
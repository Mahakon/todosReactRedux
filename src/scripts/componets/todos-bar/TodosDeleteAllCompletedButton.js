import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import deleteAllCompletedTodosAction from
        '../../modules/actions/deleteAllCompletedTodosAction'


const TODOS_DELETE_ALL_COMPLETED_BUTTON = 'todos-actions-bar_delete-done';

class TodosDeleteAllCompletedButton extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(event) {
        if (event.target.className.
            localeCompare(TODOS_DELETE_ALL_COMPLETED_BUTTON) === 0) {
            this.props.onDeleteAllCompletedTodos()
        }
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this)
            .addEventListener('click', this.handlerClick);
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this)
            .removeEventListener('click', this.handlerClick);
    }

    render() {
        return (
            <div className="todos-actions-bar_delete">
                <button className="todos-actions-bar_delete-done"
                        aria-label="delete all done items">
                    Clear completed
                </button>
            </div>
        )
    }

}

export default connect(
    null,
    dispatch => ({
        onDeleteAllCompletedTodos() {
            dispatch(deleteAllCompletedTodosAction())
        }
    })
)(TodosDeleteAllCompletedButton)
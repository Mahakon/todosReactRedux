import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import TodosItem from './TodosItem'

import toggleTodosAction from '../../modules/actions/toggleTodosAction'
import deleteTodosAction from '../../modules/actions/deteleTodosAction'

const TODOS_DELETE_BUTTON_CLASS_NAME = "todos-item_delete";
const TODOS_CHECKBOX_CLASS_NAME = ["todos-item_done-mark",
    "todos-item_undone-mark"];

class TodosList extends React.Component {
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(event) {
        switch (event.target.className) {
            case TODOS_CHECKBOX_CLASS_NAME[0]:
            case TODOS_CHECKBOX_CLASS_NAME[1]: {
                this.props.onToggleTodos(
                    event.target.parentNode.parentNode.id)
            } break;

            case TODOS_DELETE_BUTTON_CLASS_NAME: {
                this.props.onDeleteTodos(
                    event.target.parentNode.parentNode.id)
            } break;
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
            <div className="todos-list">
                {this.props.todosArray.map((todosElement) =>
                    <TodosItem key={todosElement.id}
                               completed={todosElement.completed}
                               currentFilter=
                                   {this.props.currentFilter}
                               value={todosElement.text}
                               id={todosElement.id}
                    />
                )}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    todosArray: state.todosArray,
    currentFilter: state.currentFilter
});

const mapDispatchToProps = dispatch => ({
    onDeleteTodos(id) {
        dispatch(deleteTodosAction(id))
    },
    onToggleTodos(id) {
        dispatch(toggleTodosAction(id))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodosList)
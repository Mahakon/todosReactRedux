import addTodosAction from '../../modules/actions/addTodosAction'
import makeAllCompletedTodosAction from
        '../../modules/actions/makeAllCompletedTodosAction'
import React from 'react'
import ReactDOM from 'react-dom'

const TODOS_INPUT = 'todos-add_new-item';
const TODOS_SELECT_ALL_BUTTON = 'todos-add_select-all';
const ENTER_KEY_CODE = 13;

export default class AddTodos extends React.Component{
    constructor(props) {
        super(props);
        this.handlerKeyPress = this.handlerKeyPress.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerKeyPress(event) {
        if (event.target.className.localeCompare(TODOS_INPUT) === 0) {
            if (event.keyCode === ENTER_KEY_CODE) {
                this.props.store.dispatch(addTodosAction(
                    event.target.value,
                    new Date().getTime()
                ));
                event.target.value = '';
            }
        }
    }

    handlerClick(event) {
        if (event.target.className.localeCompare
            (TODOS_SELECT_ALL_BUTTON) === 0) {
            this.props.store.dispatch(makeAllCompletedTodosAction())
        }
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this)
            .addEventListener('keypress', this.handlerKeyPress);
        ReactDOM.findDOMNode(this)
            .addEventListener('click', this.handlerClick);
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this)
            .removeEventListener('keypress', this.handlerKeyPress);
        ReactDOM.findDOMNode(this)
            .removeEventListener('click', this.handlerClick);
    }

    setVisibilityToSelectAllButton() {
        if (this.props.store.getState().todosArray.length === 0) {
            return {
                visibility: 'hidden'
            }
        }

        return {
            visibility: 'visible'
        }
    }

    render() {
        return (
            <div className="todos-add">

                <button className="todos-add_select-all" style=
                    {this.setVisibilityToSelectAllButton()}
                        aria-label="select all like done">

                    <div className="todos-add_select-all_icon"></div>

                </button>

                <div className="todos-add_new-item-w">

                    <input className="todos-add_new-item"
                           placeholder="What needs to be done?"
                           aria-label="add new item"/>

                </div>

            </div>
        )
    }

}

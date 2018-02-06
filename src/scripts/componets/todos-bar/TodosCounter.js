import React from 'react'
import { connect } from 'react-redux'

export class TodosCounter extends React.Component {
    constructor(props) {
        super(props);
        this.getNumOfActiveItems = this.getNumOfActiveItems.bind(this);
    }

    getNumOfActiveItems() {
        let num = 0;

        for (let i = 0; i < this.props.todosArray.length; i++) {
            if (!this.props.todosArray[i].completed) {
                num++;
            }
        }

        return num + " items left";
    }

    render() {
        return (
            <div className="todos-actions-bar_counter-undone"
                 aria-label="number of undone items">
                {this.getNumOfActiveItems()}
            </div>
        )
    }

}

export const connectedTodosCounter =  connect(
    state => ({
        todosArray: state.todosArray
    }),

    null
)(TodosCounter)
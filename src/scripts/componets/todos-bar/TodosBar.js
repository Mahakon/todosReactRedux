import React from 'react'
import TodosDeleteAllCompletedButton from './TodosDeleteAllCompletedButton'
import TodosFilters from './TodosFilters'
import TodosCounter from './TodosCounter'

export default class TodosBar extends React.Component{
    constructor(props) {
        super(props);
        this.setVisibility = this.setVisibility.bind(this);
    }

    setVisibility() {
        if (this.props.store.getState().todosArray.length == 0) {
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

                <TodosCounter todosArray={this.props.store.getState().todosArray}/>

                <TodosFilters store={this.props.store}/>

                <TodosDeleteAllCompletedButton store={this.props.store}/>

            </div>
        )
    }

}
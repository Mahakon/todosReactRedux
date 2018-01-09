var React = require('react');
var ReactDOM = require('react-dom');
var Component = React.Component;

class TodosCounter extends Component{
    constructor(store) {
        super();
        this.store = store;
    }

    getNumOfActiveItems() {
        let num = 0;

        for (let i = 0; i < this.store.getState().todosArray.length; i++) {
            if (!this.store.getState().todosArray[i].completed) {
                num++;
            }
        }

        return num + " items left";
    }

    render() {
        return React.createElement(
            "div",

            null,

            this.getNumOfActiveItems()
        )
    }

}

module.exports = TodosCounter;
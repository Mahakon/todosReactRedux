var React = require('react');
var Component = React.Component;
const FILTER_ALL = "todos-filter __all";
const FILTER_COMPLETED = "todos-filter __completed";
const FILTER_ACTIVE = "todos-filter __active";

class TodosItem extends Component{
    getClassName(completed, type = "item") {
        switch (type) {
            case "mark-w": {
                return (!completed) ?
                    "todos-item_undone-mark-w" :
                    "todos-item_done-mark-w"
            } break;

            case "mark-icon": {
                return (!completed) ?
                    "todos-item_undone-mark-icon" :
                    "todos-item_done-mark-icon"
            } break;

            case "mark": {
                return (!completed) ?
                    "todos-item_undone-mark" :
                    "todos-item_done-mark"
            } break;

            default: {
                return (!completed) ?
                    "todos-item" :
                    "todos-item __done"
            }
        }
    }

    getVisibality(currentFilter, completed) {
        switch (currentFilter) {
            case FILTER_ALL: {
                return "block";
            } break;

            case FILTER_ACTIVE: {
                return (completed) ?
                    "none" : "block"
            } break;

            case FILTER_COMPLETED : {
                return (!completed) ?
                    "none" : "block"
            } break;
        }
    }

    renderTodosItem(value, key, currentFilter) {
        return React.createElement(
            "div",

            {
                className: this.getClassName(value.completed),
                key: key,
                style: {
                    display: this.getVisibality(currentFilter, value.completed)
                }
            },

            React.createElement(
                "div",

                {className: this.getClassName(value.completed, "mark-w")},

                React.createElement(
                    "div",

                    {className: this.getClassName(value.completed, "mark-icon")},

                    null
                ),

                React.createElement(
                    "input",
                    {
                        className: this.getClassName(value.completed, "mark"),
                        type: "checkbox"
                    },

                    null
                )
            ),

            React.createElement(
                "div",

                {className: "todos-item_delete-w"},

                React.createElement(
                    "div",

                    {className: "todos-item_delete_icon"},

                    null
                ),

                React.createElement(
                    "button",

                    {className: "todos-item_delete"},

                    null
                )
            ),

            React.createElement(
                "div",

                {className: "todos-item_name-w"},

                React.createElement(
                    "textarea",

                    {
                        className: "todos-item_name",
                        value: value.text,
                        readOnly: "readOnly",
                    },

                    null
                )
            )
        )
    }

}

module.exports = TodosItem;
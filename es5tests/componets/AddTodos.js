'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { Component } from 'react';
//import addTodosAction from '../modules/actions/addTodosAction';

var React = require('react');
var Component = React.Component;
var addTodosAction = require('../modules/actions/addTodosAction');

var TODOS_INPUT = ".todos-add_new-item";
var TODOS_SELECT_ALL_BUTTON = ".todos-add_select-all";
var ENTER_KEY_CODE = 13;

var totalNumOfTodosELements = 0;

var AddTodos = function (_React$Component) {
    _inherits(AddTodos, _React$Component);

    function AddTodos(store) {
        _classCallCheck(this, AddTodos);

        var _this = _possibleConstructorReturn(this, (AddTodos.__proto__ || Object.getPrototypeOf(AddTodos)).call(this));

        _this.todoInput = document.querySelector(TODOS_INPUT);
        _this.todoSelectAllButton = document.querySelector(TODOS_SELECT_ALL_BUTTON);

        _this.todoInput.addEventListener('keypress', function (event) {
            if (event.keyCode === ENTER_KEY_CODE) {
                store.dispatch(addTodosAction(event.target.value, totalNumOfTodosELements));
                console.log(store.getState());
                event.target.value = "";
                totalNumOfTodosELements++;
            }
        });

        _this.todoSelectAllButton.addEventListener('click', function () {
            //store.dispatch(addTodosAction());
        });

        return _this;
    }

    _createClass(AddTodos, [{
        key: 'render',
        value: function render() {
            return React.createElement("div", { className: "todos-item" });
        }
    }]);

    return AddTodos;
}(React.Component);

module.exports = AddTodos;
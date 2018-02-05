import React from 'react'
import deepFreeze from 'deep-freeze'

const FILTER_ALL = 'todos-filter __all';
const FILTER_COMPLETED = 'todos-filter __completed';
const FILTER_ACTIVE = 'todos-filter __active';

global.React = React;

global.testStates = deepFreeze([
    {
        todosArray: [
            {
                id: 375987352,
                text: "maha1",
                completed: true
            },
            {
                id: 3759873552,
                text: "maha2",
                completed: false
            },
            {
                id: 37598735452,
                text: "maha3",
                completed: true
            },
        ],
        currentFilter: FILTER_COMPLETED
    },
    {
        todosArray: [
            {
                id: 375987352,
                text: "maha1",
                completed: false
            },
            {
                id: 3759873552,
                text: "maha2",
                completed: false
            }
        ],
        currentFilter: FILTER_ACTIVE
    },
    {
        todosArray: [
            {
                id: 375987352,
                text: "maha1",
                completed: true
            }
        ],
        currentFilter: FILTER_ALL
    },
    {
        todosArray: [],
        currentFilter: FILTER_ALL
    },
]);

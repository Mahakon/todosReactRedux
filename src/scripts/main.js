import {createStore} from 'redux'
import appReducer from './modules/reducers/appReducer'
import TodosContainer from './componets/TodosContainer'
import ReactDOM from 'react-dom'
import React from'react'

const init = () => {
    function render() {
        localStorage['redux-store'] = JSON.stringify(store.getState());
        ReactDOM.render(
            <TodosContainer store={store}/>,
            document.querySelector('.todos-container')
        )
    }

    const store = createStore(
        appReducer,
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            {}
    );

    store.subscribe(render);
    render();
}

document.addEventListener('DOMContentLoaded', init);
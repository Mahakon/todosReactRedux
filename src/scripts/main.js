import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import appReducer from './modules/reducers/appReducer'
import TodosContainer from './componets/TodosContainer'

const init = () => {
    function render() {
        localStorage['redux-store'] = JSON.stringify(store.getState());
        ReactDOM.render(
            <Provider store={store}>
                <TodosContainer/>
            </Provider>,
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
};

document.addEventListener('DOMContentLoaded', init);
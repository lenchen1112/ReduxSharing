import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Map} from 'immutable';
import Slide from './Slide';
import reducer from './reducer';

const initialState = Map({
    slideIndex: 0
});
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Slide />
        </div>
    </Provider>,
    document.getElementById('app')
);
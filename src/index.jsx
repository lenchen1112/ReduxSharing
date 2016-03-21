import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Map} from 'immutable';
import SlideWrapper from './SlideWrapper';
import reducer from './reducer';

const initialState = Map({
    slideIndex: 0,
    totalPageCount: 28
});
const store = createStore(
	reducer,
	initialState,
	window.devToolsExtension ? window.devToolsExtension() : undefined
);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <SlideWrapper />
        </div>
    </Provider>,
    document.getElementById('app')
);
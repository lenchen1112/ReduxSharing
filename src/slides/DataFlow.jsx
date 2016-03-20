import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="data-flow-title">Data flow</span>
        <div className="courier-new">
            <span className="data-flow-dispatch">store.dispatch(actionCreator())</span>
            <span className="data-flow-subscribe">store.subscribe(listener)</span>
            <span className="data-flow-getState">store.getState()</span>
            <span className="data-flow-combineReducers">combineReducers(reducer1, reducer2, ...)</span>
        </div>
        <img className="data-flow-redux" src="assets/compare-flow-redux.png" />
    </div>
);

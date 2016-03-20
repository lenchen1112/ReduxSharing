import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="reducers4-title">Reducers</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Reducer composition</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span className="courier-new">combineReducers(REDUCER_1, REDUCER_2, ...)</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>Part of state for each reducer</span>
                    </li>
                </ul>
            </li>
        </ul>
        <img className="reducers4-code1" src="assets/reducers4-snippet-code1.png" />
        <img className="reducers4-code2" src="assets/reducers4-snippet-code2.png" />
        <img className="reducers4-combined-code" src="assets/reducers4-combined-snippet-code.png" />
    </div>
);

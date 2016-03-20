import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="reducers2-title">Reducers</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span className="courier-new">(previousState, action) => newState</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>Spread operator</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span className="courier-new">Object.assign()</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span className="courier-new">default</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>Initial state</span>
                    </li>
                </ul>
            </li>
        </ul>
        <img className="reducers2-code" src="assets/three-principle3-snippet-code.png" />
    </div>
);

import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="slide9-title">Three principles</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>State is read-only</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>The only way to mutate the state is to emit an action, an object describing what happened.</span>
                    </li>
                </ul>
                <img className="slide9-code" src="assets/slide9-snippet-code.png" />
            </li>
        </ul>
    </div>
);

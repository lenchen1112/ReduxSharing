import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="three-principle2-title">Three principles</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>State is read-only</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>The only way to mutate the state is to emit an action, an object describing what happened.</span>
                    </li>
                </ul>
                <img className="three-principle2-code" src="assets/three-principle2-snippet-code.png" />
            </li>
        </ul>
    </div>
);

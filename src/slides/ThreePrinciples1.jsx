import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="three-principle1-title">Three principles</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Single source of truth</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>The state of your whole application is stored in an object tree within a single store.</span>
                    </li>
                </ul>
                <img className="three-principle1-code" src="assets/three-principle1-snippet-code.png" />
            </li>
        </ul>
    </div>
);

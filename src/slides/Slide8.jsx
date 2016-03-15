import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="slide8-title">Three principles</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Single source of truth</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>The state of your whole application is stored in an object tree within a single store.</span>
                    </li>
                </ul>
                <img className="slide8-code" src="assets/slide8-snippet-code.png" />
            </li>
        </ul>
    </div>
);

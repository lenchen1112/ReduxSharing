import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="provider-title">Provider</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Makes the Redux store available magically</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>via React context</span>
                    </li>
                </ul>
            </li>
            <img className="provider-code" src="assets/provider-snippet-code.png" />
        </ul>
    </div>
);

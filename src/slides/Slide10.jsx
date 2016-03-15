import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="slide10-title">Three principles</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Changes are made with pure functions</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>To specify how the state tree is transformed by actions, you write pure reducers.</span>
                    </li>
                </ul>
                <img className="slide10-code" src="assets/slide10-snippet-code.png" />
            </li>
        </ul>
    </div>
);

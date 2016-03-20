import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="three-principle3-title">Three principles</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Changes are made with pure functions</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>To specify how the state tree is transformed by actions, you write pure reducers.</span>
                    </li>
                </ul>
                <img className="three-principle3-code" src="assets/three-principle3-snippet-code.png" />
            </li>
        </ul>
    </div>
);

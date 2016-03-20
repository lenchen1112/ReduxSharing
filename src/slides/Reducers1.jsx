import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="reducers1-title">Reducers</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Pure functions</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>No surprises</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>No side effects</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>No API calls</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>No mutations</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>Just a calculation and return</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);

import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="motivation2-title">Motivation</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>State container</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>Predictable</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>Pure reducers</span>
                    </li>
                </ul>
            </li>
        </ul>
        <img className="motivation2-mentos-coke-gif" src="./assets/motivation2-mentos-coke.gif" />
    </div>
);

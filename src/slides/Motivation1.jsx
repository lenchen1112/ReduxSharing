import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="motivation1-title">Motivation</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>More and more states</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>Asynchronicity</span> - mentos
                    </li>
                    <li className="slide-list-subitem">
                        <span>Mutation</span> - coke
                    </li>
                </ul>
            </li>
        </ul>
        <img className="motivation1-mentos-coke-gif" src="./assets/motivation1-mentos-coke.gif" />
    </div>
);

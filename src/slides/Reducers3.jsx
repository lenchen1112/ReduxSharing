import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="reducers3-title">Reducers</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span className="courier-new">ACTIONS_ARRAY.reduce(YOUR_REDUCER, initState)</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>Batch, replay, and ... Time Travel !!</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>Remote control</span>
                    </li>
                </ul>
            </li>
        </ul>
        <img className="reducers3-code" src="assets/reducers3-time-travel.gif" />
    </div>
);

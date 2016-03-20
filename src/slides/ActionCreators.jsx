import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="action-creators-title">Action creators</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Functions that create actions</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                                        <span className="courier-new">store.dispatch(YOUR_ACTION_CREATOR())</span>
                    </li>
                </ul>
            </li>
            <img className="action-creators-redux-style-code" src="assets/action-creators-redux-style-snippet-code.png" />
            <img className="action-creators-flux-style-code" src="assets/action-creators-flux-style-snippet-code.png" />
        </ul>
    </div>
);

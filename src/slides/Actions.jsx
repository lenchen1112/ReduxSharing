import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="actions-title">Actions</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Payloads of information for your store</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span className="courier-new">store.dispatch(YOUR_ACTION)</span>
                    </li>
                </ul>
            </li>
            <img className="actions-code" src="assets/three-principle2-snippet-code.png" />
        </ul>
    </div>
);

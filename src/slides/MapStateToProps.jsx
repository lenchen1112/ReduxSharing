import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="map-state-to-props-title">MapStateToProps</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Subscribes state and returns props</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span className="courier-new">mapStateToProps(state, [ownProps]): stateProps</span>
                    </li>
                </ul>
            </li>
            <img className="map-state-to-props-code" src="assets/map-state-to-props-snippet-code.png" />
        </ul>
    </div>
);

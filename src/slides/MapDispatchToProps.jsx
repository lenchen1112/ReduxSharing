import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="map-dispatch-to-props-title">MapDispatchToProps</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Receives dispatch method and returns callback props</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span className="courier-new">mapDispatchToProps(dispatch, [ownProps]): dispatchProps</span>
                    </li>
                </ul>
            </li>
            <img className="map-dispatch-to-props-code" src="assets/map-dispatch-to-props-snippet-code.png" />
        </ul>
    </div>
);

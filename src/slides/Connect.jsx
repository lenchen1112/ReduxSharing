import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="connect-title">Connect</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Connects a React component to the Redux store</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>Returns a new connected component</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span className="courier-new">connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])</span>
                    </li>
                </ul>
            </li>
            <img className="connect-code" src="assets/connect-snippet-code.png" />
        </ul>
    </div>
);

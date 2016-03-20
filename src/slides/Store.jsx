import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="store-title">Store</span>
        <ul className="slide-list"> 
            <li className="slide-list-item">
                <span>Only one store in your app</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span className="courier-new">createStore(COMBINED_REDUCER[, initState])</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span className="courier-new">store.getState()</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span className="courier-new">store.dispatch(action)</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span className="courier-new">const listenerUnsubscrib = store.subscribe(listener);</span>
                        <span className="store-courier-new-list-subitem4">listenerUnsubscrib();</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);

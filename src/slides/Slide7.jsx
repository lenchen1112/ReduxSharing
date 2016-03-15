import React from 'react';

export default () => (
    <div className="slide-page">
        <span className="slide7-title">Redux == Flux implementation?</span>
        <ul className="slide-list">
            <li className="slide-list-item">
                <span>Yes</span>
                <ul className="slide-sublist">
                    <li className="slide-list-subitem">
                        <span>Update in a certain layer</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>Both have actions</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>Reducer in Redux == Store in Flux</span>
                    </li>
                </ul>
            </li>
            <li className="slide7-list-item2">
                <span>No</span>
                <ul className="slide7-sublist2">
                    <li className="slide-list-subitem">
                        <span>No Dispatcher in Redux. &#10004; Pure functions &#10006; Event emitters</span>
                    </li>
                    <li className="slide-list-subitem">
                        <span>Redux assumes you never mutate your data</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
);

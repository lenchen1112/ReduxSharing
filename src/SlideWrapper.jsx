import React from 'react';
import {connect} from 'react-redux';
import eventListener from 'fbjs/lib/EventListener';
import * as actionCreators from './actionCreators';
import Cover from './slides/Cover';
import Outline from './slides/Outline';
import ReduxComeFrom from './slides/ReduxComeFrom';
import Motivation1 from './slides/Motivation1';
import Motivation2 from './slides/Motivation2';
import Motivation3 from './slides/Motivation3';
import CompareFlow from './slides/CompareFlow';
import ThreePrinciples1 from './slides/ThreePrinciples1';
import ThreePrinciples2 from './slides/ThreePrinciples2';
import ThreePrinciples3 from './slides/ThreePrinciples3';
import Actions from './slides/Actions';
import ActionCreators from './slides/ActionCreators';
import Reducers1 from './slides/Reducers1';
import Reducers2 from './slides/Reducers2';
import Reducers3 from './slides/Reducers3';
import Reducers4 from './slides/Reducers4';
import Store from './slides/Store';
import DataFlow from './slides/DataFlow';
import ThatIsIt from './slides/ThatIsIt';

function mapStateToProps (state) {
    return {
        slideIndex: state.get('slideIndex')
    };
}

class SlideWrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.keyboardEventListener = eventListener.listen(document, 'keydown', event => {
            switch (event.keyCode) {
                case 13: // enter
                case 32: // white space
                case 34: // page down
                case 39: // right arrow
                case 40: // down arrow
                case 78: // n
                    this.props.jumpToNextPage();
                    return;
                case 33: // page up
                case 37: // left arrow
                case 38: // up arrow
                case 80: // p
                    this.props.jumpToPreviousPage();
                    return;
                case 35: // end
                    this.props.jumpToLastPage();
                    return;
                case 36: // home
                    this.props.jumpToInitialPage();
                    return;
            }
        });
    }

    componentWillUnmount() {
        this.keyboardEventListener.remove();
    }

    render() {
        switch (this.props.slideIndex) {
            case 0:
                return <Cover />;
            case 1:
                return <Outline />;
            case 2:
                return <ReduxComeFrom />;
            case 3:
                return <Motivation1 />;
            case 4:
                return <Motivation2 />;
            case 5:
                return <Motivation3 />;
            case 6:
                return <CompareFlow />;
            case 7:
                return <ThreePrinciples1 />;
            case 8:
                return <ThreePrinciples2 />;
            case 9:
                return <ThreePrinciples3 />;
            case 10:
                return <Actions />;
            case 11:
                return <ActionCreators />;
            case 12:
                return <Reducers1 />;
            case 13:
                return <Reducers2 />;
            case 14:
                return <Reducers3 />;
            case 15:
                return <Reducers4 />;
            case 16:
                return <Store />;
            case 17:
                return <DataFlow />;
            case 18:
                return <ThatIsIt />;
        }
    }
}

export default connect(mapStateToProps, actionCreators)(SlideWrapper);
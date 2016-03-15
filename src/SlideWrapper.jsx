import React from 'react';
import {connect} from 'react-redux';
import eventListener from 'fbjs/lib/EventListener';
import * as actionCreators from './actionCreators';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';

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
            }
        });
    }

    componentWillUnmount() {
        this.keyboardEventListener.remove();
    }

    render() {
        switch (this.props.slideIndex) {
            case 0:
                return <Slide1 />;
            case 1:
                return <Slide2 />;
            case 2:
                return <Slide3 />;
            case 3:
                return <Slide4 />;
            case 4:
                return <Slide5 />;
            case 5:
                return <Slide6 />;
            case 6:
                return <Slide7 />;
            case 7:
                return <Slide8 />;
            case 8:
                return <Slide9 />;
            case 9:
                return <Slide10 />;
        }
    }
}

export default connect(mapStateToProps, actionCreators)(SlideWrapper);
import React from 'react';
import {connect} from 'react-redux';
import eventListener from 'fbjs/lib/EventListener';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';

function mapStateToProps (state) {
    return {
        slideIndex: state.get('slideIndex')
    };
}

class Slide extends React.Component {
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
                    console.log('NEXT');
                    return;
                case 33: // page up
                case 37: // left arrow
                case 38: // up arrow
                case 80: // p
                    console.log('PREVIOUS');
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
            default:
                return <div>Default view</div>;
        }
    }
}

export default connect(mapStateToProps)(Slide);
import {Map} from 'immutable';

const TOTAL_PAGE_COUNT = 2;

export default (state = Map(), action) => {
    switch (action.type) {
        case 'JUMP_TO_NEXT':
            if (pageIndex === TOTAL_PAGE_COUNT - 1) {
                return state;
            }
            return state.update('slideIndex', value => value + 1);
        case 'JUMP_TO_PREVIOUS':
            if (pageIndex === 0) {
                return state;
            }
            return state.update('slideIndex', value => value - 1);
        default:
            return state;
    }
};
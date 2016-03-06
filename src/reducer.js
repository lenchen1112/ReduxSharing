import {Map} from 'immutable';

const TOTAL_PAGE_COUNT = 2;

export default (state, action) => {
    const pageIndex = state.get('slideIndex', 0);
    switch (action.type) {
        case 'JUMP_TO_NEXT_PAGE':
            if (pageIndex === TOTAL_PAGE_COUNT - 1) {
                return state;
            }
            return state.update('slideIndex', value => value + 1);
        case 'JUMP_TO_PREVIOUS_PAGE':
            if (pageIndex === 0) {
                return state;
            }
            return state.update('slideIndex', value => value - 1);
        default:
            return state;
    }
};
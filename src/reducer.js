import {Map} from 'immutable';

export default (state, action) => {
    const pageIndex = state.get('slideIndex', 0);
    
    switch (action.type) {
        case 'JUMP_TO_NEXT_PAGE':
            if (pageIndex === state.get('totalPageCount', 1) - 1) {
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
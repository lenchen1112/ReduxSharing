import {Map} from 'immutable';

export default (state, action) => {
    const pageIndex = state.get('slideIndex', 0);
    const totalPageCount = state.get('totalPageCount', 1);
    
    switch (action.type) {
        case 'JUMP_TO_NEXT_PAGE':
            if (pageIndex === totalPageCount - 1) {
                return state;
            }
            return state.update('slideIndex', value => value + 1);
        case 'JUMP_TO_PREVIOUS_PAGE':
            if (pageIndex === 0) {
                return state;
            }
            return state.update('slideIndex', value => value - 1);
        case 'JUMP_TO_LAST_PAGE':
            return state.set('slideIndex', totalPageCount - 1);
        case 'JUMP_TO_INITIAL_PAGE':
            return state.set('slideIndex', 0);
        default:
            return state;
    }
};
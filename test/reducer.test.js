import {Map} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe ('reducer', () => {
    it ('should jump to the next page if not in the last page', () => {
        const initialState = Map({
            slideIndex: 0,
            totalPageCount: 20
        });
        const action = {
            type: 'JUMP_TO_NEXT_PAGE'
        };

        const newState = reducer(initialState, action);

        expect(newState).to.equal(Map({
            slideIndex: 1,
            totalPageCount: 20
        }));
    });

    it ('shouldn\'t jump to the next page if in the last page', () => {
        const initialState = Map({
            slideIndex: 19,
            totalPageCount: 20
        });
        const action = {
            type: 'JUMP_TO_NEXT_PAGE'
        };

        const newState = reducer(initialState, action);

        expect(newState).to.equal(Map({
            slideIndex: 19,
            totalPageCount: 20
        }))
    });

    it ('should jump to the previous page if not in the first page', () => {
        const initialState = Map({
            slideIndex: 10,
            totalPageCount: 20
        });
        const action = {
            type: 'JUMP_TO_PREVIOUS_PAGE'
        };

        const newState = reducer(initialState, action);

        expect(newState).to.equal(Map({
            slideIndex: 9,
            totalPageCount: 20
        }));
    });

    it ('shouldn\'t jump to the previous page if in the first page', () => {
        const initialState = Map({
            slideIndex: 0,
            totalPageCount: 20
        });
        const action = {
            type: 'JUMP_TO_PREVIOUS_PAGE'
        };

        const newState = reducer(initialState, action);

        expect(newState).to.equal(Map({
            slideIndex: 0,
            totalPageCount: 20
        }));
    });

    it ('should jump to the last page', () => {
        const initialState = Map({
            slideIndex: 10,
            totalPageCount: 20
        });
        const action = {
            type: 'JUMP_TO_LAST_PAGE'
        };

        const newState = reducer(initialState, action);

        expect(newState).to.equal(Map({
            slideIndex: 19,
            totalPageCount: 20
        }));
    });

    it ('should jump to the initial page', () => {
        const initialState = Map({
            slideIndex: 10,
            totalPageCount: 20
        });
        const action = {
            type: 'JUMP_TO_INITIAL_PAGE'
        };

        const newState = reducer(initialState, action);

        expect(newState).to.equal(Map({
            slideIndex: 0,
            totalPageCount: 20
        }));
    });
});
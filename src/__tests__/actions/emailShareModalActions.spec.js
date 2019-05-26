import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosInstance from '../../config/axiosConfig';

import { 
    OPEN_EMAIL_SHARE_MODAL,
    CLOSE_EMAIL_SHARE_MODAL,
    EMAIL_SHARE_BEGINS,
    EMAIL_SHARE_SUCCESS,
    EMAIL_SHARE_FAIL
} from '../../action-types';

import {
    openEmailShareModal,
    closeEmailShareModal,
    emailShare,
    loadingEmailShareStateHandler,
    emailShareSuccess,
    emailShareFailure,
} from '../../actions';

describe('Email share actions', () => {
   
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);

    test('should setup loading email share action', () => {
        expect(loadingEmailShareStateHandler()).toEqual({
            type: EMAIL_SHARE_BEGINS
        });
    });

    test('should setup open email share modal action', () => {
        expect(openEmailShareModal()).toEqual({
            type: OPEN_EMAIL_SHARE_MODAL
        });
    });

    test('should setup close email share modal action', () => {
        expect(closeEmailShareModal()).toEqual({
            type: CLOSE_EMAIL_SHARE_MODAL
        });
    });

    test('should setup email share success action with no payload', () => {
        expect(emailShareSuccess()).toEqual({
            type: EMAIL_SHARE_SUCCESS,
            payload: {}
        });
    });
    
    test('should setup email share success action with payload', () => {
        expect(emailShareSuccess({ message: 'Article shared successfully ', status: 200 })).toEqual({
            type: EMAIL_SHARE_SUCCESS,
            payload: { message: 'Article shared successfully ', status: 200 }
        });
    });

    test('should setup email share fail action with no payload', () => {
        expect(emailShareFailure()).toEqual({
            type: EMAIL_SHARE_FAIL,
            payload: ''
        });
    });

    test('should setup email share fail action with payload', () => {
        expect(emailShareFailure('failed')).toEqual({
            type: EMAIL_SHARE_FAIL,
            payload: 'failed'
        });
    });

    test('should share email success', () => {
        const store = mockStore({ emailShare: {} });
        axiosInstance.post = jest.fn().mockReturnValue(Promise.resolve({ data: { message: 'Article shared successfully', status: 200 }}));
        const expectedActions = [EMAIL_SHARE_BEGINS , EMAIL_SHARE_SUCCESS];
        return store.dispatch(emailShare('Gildard%20is%20working%20on%20it-12345678', { email: 'example@gmail.com' }))
                .then(() => {
                    expect(store.getActions()[0].type).toEqual(expectedActions[0]);
                    expect(store.getActions()[1].type).toEqual(expectedActions[1]);
                });
    });

    test('should share email success', () => {
        const store = mockStore({ emailShare: {} });
        axiosInstance.post = jest.fn().mockReturnValue(Promise.reject({ data: { message: 'Article shared successfully', status: 200 }}));
        const expectedActions = [EMAIL_SHARE_BEGINS , EMAIL_SHARE_FAIL];
        return store.dispatch(emailShare('Gildard%20is%20working%20on%20it-12345678', { email: 'example@gmail.com' }))
                .then(() => {
                    expect(store.getActions()[0].type).toEqual(expectedActions[0]);
                    expect(store.getActions()[1].type).toEqual(expectedActions[1]);
                });
    });
});
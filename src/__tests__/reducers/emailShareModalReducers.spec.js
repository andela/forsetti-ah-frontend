import { emailShareModalReducer, initialState } from '../../reducers/emailShareModalReducers';
import { 
    OPEN_EMAIL_SHARE_MODAL,
    CLOSE_EMAIL_SHARE_MODAL,
    EMAIL_SHARE_BEGINS,
    EMAIL_SHARE_SUCCESS,
    EMAIL_SHARE_FAIL 
} from '../../action-types';

describe('Email share modal reducers', () => {
    test('should return initial state', () => {
        expect(emailShareModalReducer(undefined, {})).toEqual({
            ...initialState
        });
    });

    test('should handle OPEN_EMAIL_SHARE_MODAL action', () => {
        expect(emailShareModalReducer(initialState, { 
            type: OPEN_EMAIL_SHARE_MODAL
         })).toEqual({
            ...initialState,
            showEmailShareModal: true
        });
    });

    test('should handle CLOSE_EMAIL_SHARE_MODAL action', () => {
        expect(emailShareModalReducer(initialState, {
            type: CLOSE_EMAIL_SHARE_MODAL
        })).toEqual({
            ...initialState,
            showEmailShareModal: false
        });
    });

    test('should handle EMAIL_SHARE_BEGINS action', () => {
        expect(emailShareModalReducer(initialState, {
            type: EMAIL_SHARE_BEGINS
        })).toEqual({
            ...initialState,
            isLoading: true
        })
    });

    test('should handle EMAIL_SHARE_SUCCESS action', () => {
        expect(emailShareModalReducer(initialState, {
            type: EMAIL_SHARE_SUCCESS,
            payload: { message: 'success' }
        })).toEqual({
            ...initialState,
            emailShare: { message: 'success' },
            isLoading: false
        })
    });

    test('should handle EMAIL_SHARE_FAIL action', () => {
        expect(emailShareModalReducer(initialState, {
            type: EMAIL_SHARE_FAIL,
            payload: 'failed'
        })).toEqual({
            ...initialState,
            emailShareError: 'failed',
            isLoading: false
        });
    });
});
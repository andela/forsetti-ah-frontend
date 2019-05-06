import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from '../../config/axiosConfig';
import { auth } from '../../action-types';
import { loginUser, loadingStateHandler, onLoginSuccessHandler, onFailureHandler } from '../../actions/authActions';

const { LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } = auth;


const user= {
  email: 'd.mark@example.com',
  firstname: 'Dimkpa',
  id: 'ffffabd5-4a5b-45eb-8247-ba47a978070e',
  lastname: 'Mark',
  username: 'Dimkpa'
};

const loginObject = {
  email: 'd.mark@example.com',
  password: 'soldier123'
};

const middleware = [thunk];
const mockedStore = configureMockStore(middleware);

describe('Auth actions', () => {
  it('should return correct action for loadingStateHandler ', () => {
    const action = loadingStateHandler();
    expect(action).toEqual({
      type: LOGIN_USER_BEGIN
    });
  });

  it('should return correct action for onLoginSuccessHandler ', () => {
    const response = {};
    const rememberLogin = true;

    const action = onLoginSuccessHandler(response, rememberLogin);
    expect(action).toEqual({
      type: LOGIN_USER_SUCCESS,
      payload: response,
      rememberLogin
    });
  });

  it('should return correct action for onFailureHandler ', () => {
    const response = {};

    const action = onFailureHandler(response);
    expect(action).toEqual({
      type: LOGIN_USER_FAILURE,
      payload: response
    });
  });

  it('should return correct dispatch after API call', () => {

    const store = mockedStore({});
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: user }));
    const expected = {
      type: LOGIN_USER_BEGIN,
      payload: user,
      rememberLogin: false
    };

    return store.dispatch(loginUser(loginObject, false))
      .then(() => {
        expect(store.getActions()[0].type).toEqual(expected.type);
      });
  });
});

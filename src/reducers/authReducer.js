import { auth } from '../action-types';

const {
  SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_FAILURE
} = auth;

const initialState = {
  isLoading: false,
  status: '',
  message: '',
  userObject: '',
  token: '',
  rememberToken: false,
  redirect: false,
  isloading: false,
  submit: false,
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  username: '',
  errors: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_BEGIN':
      return {
        isLoading: true,
      };
    case 'LOGIN_USER_SUCCESS':
      return {
        isLoading: false,
        status: action.payload.status,
        message: action.payload.message,
        userObject: action.payload.data.user,
        token: action.payload.data.token,
        rememberToken: action.rememberLogin
      };
    case 'LOGIN_USER_FAILURE':
      if (action.payload.status === 400) {
        return {
          isLoading: false,
          status: action.payload.status,
          message: action.payload.message,
        };
      } if (action.payload.status >= 500) {
        return {
          isLoading: false,
          status: action.payload.status,
          message: 'Some error occurred. Please try again',
        };
      }
      return {
        isLoading: false,
        status: action.payload.status,
        message: 'Something strange is happening.',
      };
    case SIGNUP_BEGIN:
      return {
        submit: true,
        isLoading: true
      };
    case SIGNUP_SUCCESS:
      return {
        submit: false,
        redirect: true,
        user: action.payload.userObject,
        message: action.payload.message,
        token: action.payload.token,
        isLoading: false
      };
    case SIGNUP_FAILURE:
      return {
        submit: false,
        redirect: false,
        message: action.message,
        isLoading: false
      };

    default:
      return {
        isLoading: false
      };
  }
};

export { authReducer, initialState };

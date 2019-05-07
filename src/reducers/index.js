import { combineReducers } from 'redux';
import { navBarReducer } from './navBarReducers';
import { modalReducer } from './modalReducer';
import { authReducer } from './authReducer';

const Reducer = combineReducers({
  showSideDrawer: navBarReducer,
  modal: modalReducer,
  auth: authReducer
});

export default Reducer;

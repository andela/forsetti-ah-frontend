import { combineReducers } from 'redux';
import { navBarReducer } from './navBarReducers';

const Reducer = combineReducers({
  showSideDrawer: navBarReducer
});

export default Reducer;

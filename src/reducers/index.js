import { combineReducers } from "redux";
import exampleReducer from './example.reducers';

const Reducer = combineReducers({
  example: exampleReducer,
});

export default Reducer;

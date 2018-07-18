import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilters';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

export default rootReducer;

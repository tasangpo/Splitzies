import { combineReducers } from 'redux';
import expensesReducer from './expenses_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    expenses: expensesReducer
});

export default entitiesReducer;
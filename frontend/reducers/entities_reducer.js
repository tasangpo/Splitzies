import { combineReducers } from 'redux';
import expensesReducer from './expenses_reducer';
import usersReducer from './users_reducer';
import groupsReducer from './groups_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    expenses: expensesReducer,
    groups: groupsReducer
});

export default entitiesReducer;
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendshipsReducer from './friendships_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    friendships: friendshipsReducer
});

export default entitiesReducer;
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_CURRENT_USER:
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_FRIENDSHIP:
        case REMOVE_FRIENDSHIP:
            const nextState = Object.assign({}, state)
            delete nextState[action.user.id]
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    }
};

export default usersReducer;

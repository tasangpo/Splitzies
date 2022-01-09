import { RECEIVE_FRIENDSHIP, RECEIVE_FRIENDSHIP_ERRORS, REMOVE_FRIENDSHIP_ERRORS } from "../actions/friendship_actions";

const friendshipsErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_FRIENDSHIP_ERRORS:
            // debugger
            return action.errors;
        case RECEIVE_FRIENDSHIP:
            // debugger
            return [];
        case REMOVE_FRIENDSHIP_ERRORS:
            return [];
        default:
            return state;
    }
}

export default friendshipsErrorsReducer;
import { RECEIVE_GROUP, RECEIVE_GROUP_ERRORS, REMOVE_GROUP_ERRORS } from "../actions/group_actions";

const groupErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_GROUP_ERRORS:
            return action.errors ? action.errors : null;
        case RECEIVE_GROUP:
            return [];
        case REMOVE_GROUP_ERRORS:
            return [];
        default:
            return state;
    }
};

export default groupErrorsReducer;
import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP } from "../actions/group_actions";

const groupsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_GROUPS:
            return action.groups;
        case RECEIVE_GROUP:
            return Object.assign({}, state, { [action.group.id]: action.group });
        case REMOVE_GROUP:
            const nextState = Object.assign({}, state);
            delete nextState[action.groupId];
            return nextState;
        default:
            return state;
    }
};

export default groupsReducer
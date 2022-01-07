import { RECEIVE_FRIENDSHIP, REMOVE_FRIENDSHIP } from "../actions/friendship_actions"; 

const friendshipsReducer = (state={}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_FRIENDSHIP:
            return nextState[action.friendship.id] = action.friendship;
        case REMOVE_FRIENDSHIP:
        default:
            return state
    }
}

export default friendshipsReducer;
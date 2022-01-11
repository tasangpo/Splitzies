import * as FriendshipAPIUtil from "../util/friendships_api_util";

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIP_ERRORS = "RECEIVE_FRIENDSHIP_ERRORS"
export const REMOVE_FRIENDSHIP_ERRORS = "REMOVE_FRIENDSHIP_ERRORS"

const receiveFriendship = user => {
    return ({
    type: RECEIVE_FRIENDSHIP,
    user
    });
}

const removeFriendship = user => ({
    type: REMOVE_FRIENDSHIP,
    user
});

const receiveFriendshipErrors = errors => {
    return {
        type: RECEIVE_FRIENDSHIP_ERRORS,
        errors
    };
};


export const addFriendAction = friendship => dispatch => {
    return FriendshipAPIUtil.addFriend(friendship).then(friendship => dispatch(receiveFriendship(friendship)), 
    err => {
        dispatch(receiveFriendshipErrors(err.responseJSON))}
    )
};
    
export const removeFriendAction = friendId => dispatch => {
    return FriendshipAPIUtil.removeFriend(friendId).then(user => dispatch(removeFriendship(user)))
}
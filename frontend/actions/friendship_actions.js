import * as FriendshipAPIUtil from "../util/friendships_api_util";

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIP_ERRORS = "RECEIVE_FRIENDSHIP_ERRORS"
export const REMOVE_FRIENDSHIP_ERRORS = "REMOVE_FRIENDSHIP_ERRORS"

const receiveFriendship = userId => {
    return ({
    type: RECEIVE_FRIENDSHIP,
    userId
    });
}

const removeFriendship = friendId => ({
    type: REMOVE_FRIENDSHIP,
    friendId
});

const receiveFriendshipErrors = errors => {
    return {
        type: RECEIVE_FRIENDSHIP_ERRORS,
        errors
    };
};

export const removeFriendshipErrors = () => ({
    type: REMOVE_FRIENDSHIP_ERR0RS
})

export const addFriendAction = friendship => dispatch => {
    return FriendshipAPIUtil.addFriend(friendship).then(friendship => dispatch(receiveFriendship(friendship))
    ).fail(errors => dispatch(receiveFriendshipErrors(errors.responseJSON)));
};
    
export const removeFriendAction = friendId => dispatch => (
    FriendshipAPIUtil.removeFriend(friendId).then(() => dispatch(removeFriendship(friendId))), err => dispatch(receiveFriendshipErrors(err.responseJSON))
)
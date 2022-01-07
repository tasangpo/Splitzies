import * as FriendshipAPIUtil from "../util/friendships_ai_util";

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

const receiveFriendship = friendship => ({
    type: RECEIVE_FRIENDSHIP,
    friendship
});

const removeFriendship = friendId => ({
    type: REMOVE_FRIENDSHIP,
    friendId
});

export const addFriendAction = friendship => dispatch => {
    return FriendshipAPIUtil.addFriend(friendship).then(friendship => dispatch(receiveFriendship(friendship)))
}
    


export const removeFriendAction = friendId => dispatch => (
    FriendshipAPIUtil.removeFriend(friendId).then(() => dispatch(removeFriendship(friendId)))
)
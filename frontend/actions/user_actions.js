import * as APIUtil from "../util/users_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"
export const RECEIVE_USER = "RECEIVE_USER"

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUsers = () => dispatch => (
    APIUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)))
)

export const fetchUser = userId => dispatch => (
    APIUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
)
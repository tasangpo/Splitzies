import * as APIUtil from "../util/groups_api_util";

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const REMOVE_GROUP = 'REMOVE_GROUP';
export const RECEIVE_GROUP_ERRORS = 'RECEIVE_GROUP_ERRORS';
export const REMOVE_GROUP_ERRORS = 'REMOVE_GROUP_ERRORS';


const receiveGroups = groups => {
    return ({
        type: RECEIVE_GROUPS,
        groups
    })
};

const receiveGroup = group => {
    return ({
        type: RECEIVE_GROUP,
        group
    })
};

const removeGroup = groupId => {
    return ({
        type: REMOVE_GROUP,
        groupId
    })
};

const receiveGroupErrors = errors => {
    return ({
        type: RECEIVE_GROUP_ERRORS,
        errors
    })
};

export const removeGroupErrors = () => {
    return ({
        type: REMOVE_GROUP_ERRORS
    })
};

export const fetchGroups = () => dispatch => {
    return APIUtil.fetchGroups().then(groups => dispatch(receiveGroups(groups)))
};

export const fetchGroup = groupId => dispatch => {
    return APIUtil.fetchGroup(groupId).then(group => {
        dispatch(receiveGroup(group))
    })
};

export const createGroup = group => dispatch => {
    return APIUtil.createGroup(group).then(group => {
        dispatch(receiveGroup(group))
        return group
    },
        errors => {
            dispatch(receiveGroupErrors(errors.responseJSON))
        }
    )
};

export const updateGroup = group => dispatch => {
    return APIUtil.updateGroup(group).then(group => {
        dispatch(receiveGroup(group))
        return group
    },
        errors => {
            dispatch(receiveGroupErrors(errors.responseJSON))
        }
    )
};

export const deleteGroup = groupId => dispatch => {
    return APIUtil.deleteGroup(groupId).then(() => dispatch(removeGroup(groupId)))
};

export const createGroupMember = payload => dispatch => {
    return APIUtil.createGroupMember(payload).then(group => {
        dispatch(receiveGroup(group))
        return group
    },
        errors => {
            dispatch(receiveGroupErrors(errors.responseJSON))
        }
    )
};



import React from "react";
import { connect } from "react-redux"
import { Link, NavLink } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.userId]
    }
}

const mDTP = dispatch => {
    return {
        removeFriendship: friendId => dispatch(removeFriendship(friendId))
    }
}


const EachFriendItem = props => {
    if (!props.user) {
        return null
    }
    return (
        <ul className="friends-list">
            <NavLink className="frd-link" to={`/friends/${props.user.id}`}><li>{props.user.name}</li></NavLink>
        </ul>
    )
}
       


export default connect(mSTP, mDTP)(EachFriendItem);
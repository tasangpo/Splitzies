import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchUsers } from "../../actions/user_action"

class Friends extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <ul className="friends-list">
                {this.props.userFriends.map(friend => <li key={friend.id}><Link className="frd-link"to="/">{friend.name}</Link></li>)}
            </ul>
        )
    }
}

const mSTP = state => ({
    userFriends: state.entities.users[state.session.id].friends
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mSTP, mDTP)(Friends);
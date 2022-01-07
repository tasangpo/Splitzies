import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Friends extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { currentUser } = this.props
        return (
            <ul className="friends-list">
                {currentUser.friends.map(friend => <li key={friend.id}><Link className="frd-link"to="/">{friend.name}</Link></li>)}
            </ul>
        )
    }
}


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})


export default connect(mSTP)(Friends);
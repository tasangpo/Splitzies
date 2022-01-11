import React from "react"
import { connect } from "react-redux"
import { fetchUsers } from "../../actions/user_actions";
import { removeFriendAction } from "../../actions/friendship_actions";

const mSTP = state => {
    return ({
        users: Object.values(state.entities.users)
    })
}

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    removeFriendAction: friendId => dispatch(removeFriendAction(friendId))
});

class FriendsShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const friend = this.props.users[this.props.match.params.friendId - 1]
        const friendId = friend ? friend.id : null
        return (
            <div>
                <section className="frd-hd-show">
                    <h1> &#129503; {friend ? friend.name : ''}</h1>
                    <div className="frd-show-btns">   
                        <button id="frd-show-btn1">Add an expense</button>
                        <button id="frd-show-btn2" onClick={() => this.props.removeFriendAction(friendId)}>Remove friend</button>
                    </div>
                </section>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(FriendsShow)
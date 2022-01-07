import React from "react";
import { connect } from "react-redux";
import { addFriendAction } from "../../actions/friendship_actions"

class FriendsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.addFriendAction(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Invite friends to pay your bills</h1>
                <label>Email
                    <input type="text" value={this.state.email} onChange={this.update('email')} />
                    <button>Add friend</button>
                </label>
            </form>
        )
    }
}

const mSTP = state => ({
    errors: state.errors
})

const mDTP = dispatch => ({
    addFriendAction: friend => dispatch(addFriendAction(friend))
})

export default connect(mSTP, mDTP)(FriendsForm);
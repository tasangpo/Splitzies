import React from "react";
import { connect } from "react-redux";
import { addFriendAction, removeFriendshipErrors } from "../../actions/friendship_actions"
import { closeModal } from "../../actions/modal_actions";


const mSTP = state => ({
    errors: state.errors.friendships,
    currentUserId: state.session.id,
    users: state.entities.users
})

const mDTP = dispatch => ({
    addFriendAction: friend => dispatch(addFriendAction(friend)),
    closeModal: () => dispatch(closeModal()),
    removeFriendshipErrors: () => dispatch(removeFriendshipErrors())
})


class FriendsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        this.props.removeFriendshipErrors();
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.addFriendAction(this.state).then(() => {
            if (!this.props.errors.length) {
                this.props.closeModal()
            }
        })
    }

    renderErrors() {
        const { errors } = this.props;
        return (
            <div>
                {errors ? <ul>
                    {errors.map(( err, i) => <li className="err-frd-add" key={i}>{err}</li>)}
                </ul> : ""}
            </div>
        )
    }

    render() {
        const { currentUserId, users } = this.props;
        const currentUser = users[currentUserId];
        const friendsIds = currentUser.friendIds;
        const nonFriendIds = Object.keys(users).map(id => parseInt(id)).filter(id => !friendsIds.includes(id) && id !== currentUserId);
        return (
            <div className="modal-frd">
                <form className="add-frd-form" onSubmit={this.handleSubmit}>
                    <div id="inv-frd-header">
                        <h1 >&#128233;&nbsp;&nbsp;Invite friends</h1>
                        <button onClick={this.props.closeModal}>&#10060;</button>
                    </div>  
                    <input type="text" value={this.state.email} placeholder="To:   email address" onChange={this.update('email')} />
                    <h1>OR</h1>
                    <select className="frd-select" onChange={this.update('email')}> 
                        <option disabled selected>Choose a user</option>
                        {nonFriendIds.map(id => {
                            const user = users[id]
                            return <option key={id} value={user.email}>{user.name}</option>
                        })}
                    </select>
                    <div className="frd-msg-btn-container">
                        <h5>Note: user must be signed up on the site</h5>
                        <button id="add-orange-btn">Add friend</button>
                    </div>  
                </form>
                {this.renderErrors()}
            </div>
            
        )
    }
}


export default connect(mSTP, mDTP)(FriendsForm);
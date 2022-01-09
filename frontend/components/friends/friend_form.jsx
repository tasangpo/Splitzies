import React from "react";
import { connect } from "react-redux";
import { addFriendAction } from "../../actions/friendship_actions"
import { closeModal } from "../../actions/modal_actions";

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

    renderSuccess() {
        return (
            <div>
                <h2>Friend has been added :)</h2>
            </div>
        )
    }


    render() {
        const { errors } = this.props;
        return (
            <div className="modal-frd">
                <form className="add-frd-form" onSubmit={this.handleSubmit}>
                    <h1 id="inv-frd-header">&#128233;&nbsp;&nbsp;Invite friends</h1>
                    <input type="text" value={this.state.email} placeholder="To:   email address" onChange={this.update('email')} />
                    <div className="frd-msg-btn-container">
                        <h5>Note: user must be signed up on the site</h5>
                        <button id="add-orange-btn">Add friend</button>
                    </div>  
                </form>
                {errors.length !==0 ? this.renderErrors() : this.renderSuccess}
                

            </div>
            
        )
    }
}

const mSTP = state => ({
    errors: state.errors.friendships
})

const mDTP = dispatch => ({
    addFriendAction: friend => dispatch(addFriendAction(friend)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(FriendsForm);
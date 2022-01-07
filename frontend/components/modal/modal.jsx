import React from "react";
import { connect } from "react-redux";
import FriendsForm from "../friends/friend_form"
import { closeModal } from "../../actions/modal_actions";

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'addFriend':
            component = <FriendsForm />
            break
        default:
            return null
    }
    debugger
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mSTP = state => ({
    modal: state.ui.modal
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal)


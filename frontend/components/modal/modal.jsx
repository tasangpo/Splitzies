import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import FriendsForm from "../friends/friend_form"
import AddExpenseForm from "../expenses/add_expense_form"

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'addFriend':
            component = <FriendsForm />
            break;
        case 'addExpense':
            component = < AddExpenseForm/>
            break;

        default:
            return null
    }
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


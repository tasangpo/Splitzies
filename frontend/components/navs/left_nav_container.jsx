import { connect } from "react-redux"
import LeftNav from "./left_nav"
import { openModal } from "../../actions/modal_actions"
import { fetchUsers } from "../../actions/user_actions"
import { fetchExpenses } from "../../actions/expense_actions"
import { fetchGroups } from "../../actions/group_actions"


const mSTP = state => ({
    // friendIds: state.entities.users[state.session.id].friendIds,
    groupIds: state.entities.users[state.session.id].groupIds,
    currentUser: state.entities.users[state.session.id]
})


const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchExpenses: () => dispatch(fetchExpenses()),
    fetchGroups: () => dispatch(fetchGroups())
})


export default connect(mSTP, mDTP)(LeftNav);
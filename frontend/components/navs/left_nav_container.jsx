import { connect } from "react-redux"
import LeftNav from "./left_nav"
import { openModal } from "../../actions/modal_actions"
import { fetchUsers } from "../../actions/user_action"

const mSTP = state => ({
    friendIds: state.entities.users[state.session.id].friendIds
})


const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchUsers: () => dispatch(fetchUsers())
})


export default connect(mSTP, mDTP)(LeftNav);
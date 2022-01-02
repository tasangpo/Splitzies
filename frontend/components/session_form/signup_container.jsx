import { connect } from "react-redux";
import { removeSessionErrors, signup } from "../../actions/session_actions";
import SignupForm from "./signup_form"

const mSTP = state => ({
    errors: state.errors.session
})

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mSTP, mDTP)(SignupForm);
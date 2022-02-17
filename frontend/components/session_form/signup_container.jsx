import { connect } from "react-redux";
import { removeSessionErrors, signup, login } from "../../actions/session_actions";
import SignupForm from "./signup_form"

const mSTP = state => ({
    errors: state.errors.session
})

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mSTP, mDTP)(SignupForm);
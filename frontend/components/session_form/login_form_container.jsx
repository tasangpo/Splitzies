import { connect } from "react-redux";
import { login, removeSessionErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";

const mSTP = state => ({
    errors: state.errors.session
})

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mSTP, mDTP)(LoginForm);
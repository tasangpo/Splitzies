import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';
import { openModal } from "../../actions/modal_actions"
 

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);


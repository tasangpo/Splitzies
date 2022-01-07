import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions"

class ProfileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        const newState = !this.state.show;
        this.setState({show: newState})
    }

    render() {
        return (
            <div>
                <button onFocus={this.toggleMenu} onBlur={this.toggleMenu} className="menu-btn" >
                    &#127744; &nbsp; {this.props.currentUser.name}
                    <ul onClick={e => e.stopPropagation()} className={this.state.show ? "options-list-show" : "options-list-hide"}> 
                        <li className="options">Your Account</li>
                        <li className="options">Create a group</li>
                        <li onClick={this.props.logout} className="options">Log out</li>   
                    </ul>
                </button>
            </div>
        )
    }
}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    
})

export default connect(mSTP, mDTP)(ProfileMenu);
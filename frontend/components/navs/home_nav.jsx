import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../actions/session_actions"

class HomeNav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="top-container">
                <header className="home-nav">
                    <Link to="/" id="dash-home"><h1>Splitzies</h1></Link>
                    <div className="dropdown">
                        <button className="drop-btn">{this.props.currentUser.name}</button>
                        <div className="dropdown-content">
                            <Link to="/" className='drop-links'>Your Account</Link>
                            <Link to="/" className='drop-links'>Create a group</Link>
                            <Link to="/" className='drop-links' onClick={this.props.logout}>Log out</Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(HomeNav)
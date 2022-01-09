import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions"
import { fetchUsers } from "../../actions/user_action"
import EachFriendItem from "../friends/each_friend_item";


// import FriendsContainer from "./friends_container";


class LeftNav extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    
    render() {
        return (
             <section className="left-list">
                 <div className="left-options"><Link className="left-links" id="left-selected" to="/dashboard">&#128233; Dashboard</Link></div>
                 <div className="left-options"><Link className="left-links" to="/all"> &#128221; All expenses</Link></div>
                 <br />
                <section className="left-nav-comp">
                    <div className="f-header">
                        <h1>GROUPS</h1>
                        <button style={{ 'textDecoration': 'none', 'color': '#CCCCCC', 'border': 'none', 'backgroundColor': 'transparent' }}>+ add</button>
                    </div>
                    <div>

                    </div>
                </section>
                 <br />
                 <section className="left-nav-comp">
                     <div className="f-header">
                        <h1>FRIENDS</h1>
                        <button onClick={() => this.props.openModal('addFriend')} style={{ 'textDecoration': 'none', 'color': '#CCCCCC', 'border': 'none', 'backgroundColor': 'transparent' }}>+ add</button>
                     </div>
                     <div>
                        {/* <FriendsContainer/> */}
                        {this.props.friendIds.map(id => <EachFriendItem userId={id} key={id}/>)}
                     </div>
                 </section>

             </section>
        )
    }
}

const mSTP = state => ({
    friendIds: state.entities.users[state.session.id].friendIds
})


const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchUsers: () => dispatch(fetchUsers())
})



export default connect(mSTP, mDTP)(LeftNav);
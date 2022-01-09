import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import EachFriendItem from "../friends/each_friend_item";

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
                <div className="left-options"><NavLink className="left-links" id="left-selected" to="/dashboard">&#128233; Dashboard</NavLink></div>
                <div className="left-options"><NavLink className="left-links" to="/all"> &#128221; All expenses</NavLink></div>
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




export default withRouter(LeftNav);
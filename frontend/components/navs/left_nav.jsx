import React from "react";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import EachFriendItem from "../friends/each_friend_item";
import EachGroupItem from "../groups/each_group_item"

class LeftNav extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchGroups();
    }



    render() {
        return (
             <section className="left-list">
                <div className="left-options"><NavLink className="left-links"  to="/dashboard">&#128233; Dashboard</NavLink></div>
                <div className="left-options"><NavLink className="left-links" to="/all"> &#128221; All expenses</NavLink></div>
                 <br />
                <section className="left-nav-comp">
                    <div className="f-header">
                        <h1>GROUPS</h1>
                        <NavLink to="/groups/new"><button style={{ 'textDecoration': 'none', 'color': '#CCCCCC', 'border': 'none', 'backgroundColor': 'transparent' }}>+ add</button></NavLink>
                    </div>
                    <div>
                        {this.props.groupIds.map(id => <EachGroupItem groupId={id} key={id}/>)}
                    </div>
                </section>
                 <br />
                 <section className="left-nav-comp">
                     <div className="f-header">
                        <h1>FRIENDS</h1>
                        <button onClick={() => this.props.openModal('addFriend')} style={{ 'textDecoration': 'none', 'color': '#CCCCCC', 'border': 'none', 'backgroundColor': 'transparent' }}>+ add</button>
                     </div>
                     <div>
                        {this.props.friendIds.map(id => <EachFriendItem userId={id} key={id}/>)}
                     </div>
                 </section>

             </section>
        )
    }
}




export default withRouter(LeftNav);
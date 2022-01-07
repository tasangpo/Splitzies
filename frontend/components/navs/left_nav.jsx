import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FriendsContainer from "./friends_container";
import { openModal } from "../../actions/modal_actions"

class LeftNav extends React.Component {
    constructor(props) {
        super(props)
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
                        <FriendsContainer/>
                     </div>
                 </section>

             </section>
        )
    }
}

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
})



export default connect(null, mDTP)(LeftNav);
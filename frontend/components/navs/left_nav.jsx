import React from "react";
import { Link } from "react-router-dom";
import FriendsContainer from "./friends_container";

class LeftNav extends React.Component {
    render() {
        return (
             <section className="left-list">
                 <div className="left-options"><Link className="left-links" id="left-selected" to="/dashboard">&#128233; Dashboard</Link></div>
                 <div className="left-options"><Link className="left-links" to="/all"> &#128221; All expenses</Link></div>
                 <br />
                <section className="left-nav-comp">
                    <div className="f-header">
                        <h1>GROUPS</h1>
                        <Link to="/" style={{ 'textDecoration': 'none', 'color': '#CCCCCC' }}>+ add</Link>
                    </div>
                    <div>

                    </div>
                </section>
                 <br />
                 <section className="left-nav-comp">
                     <div className="f-header">
                        <h1>FRIENDS</h1>
                        <Link to="/friendForm" style={{'textDecoration': 'none', 'color': '#CCCCCC'}}>+ add</Link>
                     </div>
                     <div>
                        <FriendsContainer/>
                     </div>
                 </section>

             </section>
        )
    }
}

export default LeftNav;
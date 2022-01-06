import React from "react";
import { Link } from "react-router-dom";


class LeftNav extends React.Component {
    render() {
        return (
             <section className="left-list">
                 <div className="left-options"><Link className="left-links" id="left-selected" to="/dashboard">&#128233; Dashboard</Link></div>
                <div className="left-options"><Link className="left-links" to="/all"> &#128221; All expenses</Link></div>
                 <br />
                 <div>Groups Component COMING SOON!!</div>
                 <br />
                 <div>Friends Component COMING SOON!!</div>
             </section>
        )
    }
}


export default LeftNav;
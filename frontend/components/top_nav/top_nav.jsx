import React from "react";
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
    render() {
        return (
            <div>
                <header className="splash-header">
                    <Link to="/" id="spash-splitzies"><h1 >Splitzies</h1></Link>
                    <div className="splash-header-buttons">
                        <Link to="/login"><button style={{ width: "100px", height: "40px" }}>Log in</button></Link>
                        <br />
                        <Link to="/signup"><button id="splash-signup" style={{ width: "100px", height: "40px" }}>Sign up</button></Link>
                    </div>
                </header>
            </div>
        );
    }
}

export default TopNav
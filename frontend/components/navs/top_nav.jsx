import React from "react";
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
    render() {
        return (
                <header className="splash-header">
                    <Link to="/" id="spash-splitzies">
                        <div className="logo-title">
                            <img id="logo" src={window.logo} alt="logo" />
                            <h1>Splitzies</h1>
                        </div>
                        
                    </Link>
                    <div className="splash-header-buttons">
                        <Link to="/login"><button id="splash-login" style={{ width: "100px", height: "40px" }}>Log in</button></Link>
                        <br />
                        <Link to="/signup"><button id="splash-signup" style={{ width: "100px", height: "40px" }}>Sign up</button></Link>
                    </div>
                </header>
        );
    }
}

export default TopNav
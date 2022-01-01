import React from "react";
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    render() {
        return (
            <div>
                <Link to="/login">Log in</Link>
                <br />
                <Link to="/signup">Sign up</Link>
            </div>
        );
    }
}

export default Splash
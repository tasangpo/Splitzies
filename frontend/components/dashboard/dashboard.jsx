import React from "react";

class Dashboard extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>HELLO</h1>
                <h2 className="header-name">Hi, {this.props.currentUser.name}!</h2>
                <button className="header-button" onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
};

export default Dashboard;

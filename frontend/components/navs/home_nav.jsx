import React from "react"
import { Link } from "react-router-dom"
import ProfileMenuContainer from "./profile_menu"

class HomeNav extends React.Component {
    render() {
        return(
            <div className="top-container">
                <header className="home-nav">
                    <Link to="/" id="dash-home">
                        <h1> &#128233; &nbsp; Splitzies</h1>                        
                    </Link>
                    <ProfileMenuContainer />
                </header>
            </div>
        )
    }
}

export default HomeNav;
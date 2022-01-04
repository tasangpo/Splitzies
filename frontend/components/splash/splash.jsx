import React from "react";
import { Link } from "react-router-dom";

import TopNav from "../navs/top_nav";

class Splash extends React.Component {
    render() {
        return (
            <div>
                <TopNav />

                <div className='splash-container'>
                    <div className='splash-main'>
                        <div className='main-text'>
                            <div className="main-pad">
                                <h3>Less stress when sharing expenses <strong id="on-trips">on trips</strong></h3>
                                <p>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.</p>
                                <Link to="/signup"><button id="splash-signup" style={{ width: "100px", height: "40px" }}>Sign up</button></Link>
                            </div>
                        </div>
                        <div className="main-img">
                            <img src={window.splash} alt="splash_img" id="main-img"/>
                        </div>
                    </div>

                    <div className="splash-below">
                        <div id="track-balances" className="splash-features">
                            <h5>Track balances</h5>
                            <p>Keep track of shared expenses, balances, and who owes who.</p>
                            <img className="splash-img" src={window.splash1} alt="balances_pic"/>
                        </div>
                        <div id="org-exp" className="splash-features">
                            <h5>Organize expenses</h5>
                            <p>Split expenses with any group: trips, housemates, friends, and family.</p>
                            <img className="splash-img" src={window.splash2} alt="group_pic" />
                        </div>
                        <div id="add-exp" className="splash-features">
                            <h5>Add expenses easily</h5>
                            <p>Quickly add expenses on the go before you forget who paid.</p>
                            <img className="splash-img" src={window.splash3} alt="expenses_pic" />
                        </div>
                        <div id="pay-back" className="splash-features">
                            <h5>Pay friends back</h5>
                            <p>Settle up with a friend and record any cash or online payment.</p>
                            <img className="splash-img" src={window.splash4} alt="settle_pic" />
                        </div>
                    </div>

                </div>
            <footer>
                DISCLAIMER: ALL IMAGES ARE TAKEN FROM THE SPLITWISE WEBSITE FOR CLONING PURPOSES
            </footer>
        </div>
        );
    }
}

export default Splash
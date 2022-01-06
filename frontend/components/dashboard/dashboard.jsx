import React from "react";
import HomeNav from "../navs/home_nav";
import LeftNav  from "../navs/left_nav";

class Dashboard extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <HomeNav/>
                <div className="main-container">
                    <div className="left-console">
                        <LeftNav />
                    </div>

                    <div className="middle-console">
                        <div className="dash-header">
                            <div className="top-dash-head">
                                <h1>Dashboard</h1>
                                <div className="dash-options">
                                    <button className="dash-opt-btn" id="add-expense-btn">Add an expense</button>
                                    &nbsp; &nbsp;
                                    <button className="dash-opt-btn" id="settle-btn">Settle up</button>
                                </div>
                            </div>

                            <div className="header-balances">
                                <div>
                                    <h2 className="hd-blnc">total balance</h2>
                                    <p className="hd-blnc" style={{color: "#5BC5A7"}}>+$10.00</p>
                                </div>
                                <div>
                                    <h2 className="hd-blnc">you owe</h2>
                                    <p className="hd-blnc" style={{ color: "#FF652F" }}>$5.00</p>
                                </div>
                                <div id="head-blnc-right">
                                    <h2 className="hd-blnc" >you are owed</h2>
                                    <p className="hd-blnc" style={{ color: "#5BC5A7" }}>$15.00</p>
                                </div>
                            </div>

                            <div className="owe-owed">
                                <div id="owe-owed-header">
                                    <h2>YOU OWE</h2>
                                    <h2>YOU ARE OWED</h2>
                                </div>
                                <div id="owe-btm-cont">
                                    <div id="owe-btm-left">
                                        <h5 className="frd-name">Mantis Toboggan</h5>
                                        <p className="frd-owe">you owe $5.00</p>
                                    </div>
                                    <div>
                                        <h5 className="frd-name">Randy Marsh</h5>
                                        <p className="frd-owed">owes you $15.00</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="right-console">
                        <h2>SPLITWISE ON THE GO</h2>
                        <p>Get the free Splitwise app and add IOUs from anywhere: </p>
                        <img id="app-img"src={window.appStore} alt="app-store" />
                        <img src={window.googlePlay} alt="google-play" />
                    </div>
                </div>
            </div>
        )
    }
};

export default Dashboard;

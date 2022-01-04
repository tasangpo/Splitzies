import React from "react";
import HomeNav from "../navs/home_nav";

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
                        LEFT CONSOLE
                    </div>

                    <div className="middle-console">
                        <div className="dash-header">
                            <div className="top-dash-head">
                                <h1>Dashboard</h1>
                                <div className="dash-options">
                                    <button style={{ "backgroudColor": "orange" }}>Add an expense</button>
                                    &nbsp; &nbsp;
                                    <button>Settle up</button>
                                </div>
                            </div>

                            <div className="header-balances">
                                <div>
                                    total balance
                                </div>
                                <div>
                                    you owe
                                </div>
                                <div>
                                    you are owed
                                </div>
                            </div>
                            
                        </div>
                        <div>
                        </div>
                    </div>

                    <div className="right-console">
                        RIGHT CONSOLE
                    </div>


                </div>

            </div>
        )
    }
};

export default Dashboard;

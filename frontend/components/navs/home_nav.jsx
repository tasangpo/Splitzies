import React from "react"
import { Link, Switch } from "react-router-dom"
import { ProtectedRoute } from "../../util/route_util";
import DashboardContainer from "../dashboard/dashboard_container";
import ProfileMenuContainer from "./profile_menu"
import LeftNav from "./left_nav_container";
import FriendShow from "../friends/friends_show"
import AllExpenses from "../expenses/all_expenses";
import EditExpense from "../expenses/edit_expense_form"





class HomeNav extends React.Component {
    render() {
        return(
            <div>
                <div className="top-container">
                    <header className="home-nav">
                        <Link to="/" id="dash-home">
                            <h1> &#128233; &nbsp; Splitzies</h1>
                        </Link>
                        <ProfileMenuContainer />
                    </header>
                </div>

                <div className="main-container">
                    <section className="left-console">
                        <LeftNav currentUser={this.props.currentUser}/>
                    </section>
                    <section className="middle-console">
                        <Switch>
                            < ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
                            < ProtectedRoute exact path="/all" component={AllExpenses} />
                            < ProtectedRoute exact path="/friends/:friendId" component={FriendShow} />
                        </Switch>
                    </section>
                    <section className="right-console">
                        <h2>SPLITWISE ON THE GO</h2>
                        <p>Get the free Splitwise app and add IOUs from anywhere: </p>
                        <img id="app-img" src={window.appStore} alt="app-store" />
                        <img src={window.googlePlay} alt="google-play" />
                    </section>
                </div>
            </div>         
        )
    }
}

export default HomeNav;
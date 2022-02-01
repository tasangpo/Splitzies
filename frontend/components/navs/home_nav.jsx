import React from "react"
import { Link, Switch } from "react-router-dom"
import { ProtectedRoute } from "../../util/route_util";
import DashboardContainer from "../dashboard/dashboard_container";
import ProfileMenuContainer from "./profile_menu"
import LeftNav from "./left_nav_container";
import FriendShow from "../friends/friends_show"
import AllExpenses from "../expenses/all_expenses";
import GroupShow from "../groups/group_show";
import RightComponent from "./right_component";
import RightGroupComponent from "../groups/right-group-component";

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
                            < ProtectedRoute exact path="/groups/:groupId" component={GroupShow} />
                        </Switch>
                    </section>
                    <section className="right-console">
                        <Switch>
                            < ProtectedRoute exact path="/dashboard" component={RightComponent} />
                            < ProtectedRoute exact path="/all" component={RightComponent} />
                            < ProtectedRoute exact path="/friends/:friendId" component={RightComponent} />
                            < ProtectedRoute exact path="/groups/:groupId" component={RightGroupComponent} />
                        </Switch>

                    </section>
                </div>
            </div>         
        )
    }
}

export default HomeNav;
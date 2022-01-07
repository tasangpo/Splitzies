import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom'
import Splash from './splash/splash';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_container'
import DashboardContainer from  './dashboard/dashboard_container'

import FriendsFormContainer from './friends/friend_form'

const App = () => (
    <div>
        <Switch>
            < AuthRoute path="/login" component={LoginFormContainer}/>
            < AuthRoute path="/signup" component={SignupFormContainer}/>
            < ProtectedRoute path="/dashboard" component={DashboardContainer} />
            < ProtectedRoute path="/all" component={DashboardContainer} />
            < ProtectedRoute path="/friendForm" component={FriendsFormContainer} />
            < AuthRoute path="/" component={Splash} />
        </Switch>
    </div>
)

export default App;
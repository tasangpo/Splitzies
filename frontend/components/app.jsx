import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom'
import Splash from './splash/splash';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_container'
import HomeNav from './navs/home_nav';
import Modal from "./modal/modal";
import AddGroupForm from "./groups/add_group_form"

const App = () => (
    <div>
        <Modal/>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/" component={Splash} />
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute path="/dashboard" component={HomeNav} />
            <ProtectedRoute path="/all" component={HomeNav} />
            <ProtectedRoute path="/friends/:friendId" component={HomeNav} />
            <ProtectedRoute path="/groups/new" component={AddGroupForm} />
            <ProtectedRoute exact path="/groups/:groupId" component={HomeNav} />
        </Switch>
    </div>
)

export default App;
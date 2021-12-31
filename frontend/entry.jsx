import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

//testing
import {signup, login, logout} from "./util/session_api_util"


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    ReactDOM.render(<Root store={store}/>, root)
    // below this is for testing purposes only
    window.signup = signup;
    window.login = login;
    window.logout = logout;
})
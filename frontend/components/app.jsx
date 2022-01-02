import React from 'react';
import { BrowserRouter as Link, Router, Route, Routes } from 'react-router-dom'
import Splash from './splash/splash';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_container';

const App = () => (
    <div>
        <Routes>
            < Route path="/" element={<Splash/>} />
            < Route path="/login" element={<LoginFormContainer/>} />
            < Route path="/signup" element={<SignupFormContainer />} />
        </Routes>
    </div>
)

export default App;
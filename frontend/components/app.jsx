import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SplashContainer from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
    <div>
        <header>
            <h1>Splitzies</h1>
            <SplashContainer />
        </header>

        <Routes>
            <Route path="/login" element={<LoginFormContainer/>} />
        </Routes>
        
        

    </div>
)

export default App;
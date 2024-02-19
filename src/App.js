import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home'
import LoginPage from './pages/login';
import RegistrationPage from './pages/registration';
import Admin from "./pages/admin";
import DBoard from "./pages/dashboard"

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" Component={LoginPage}/>
                    <Route exact path="/registration" Component={RegistrationPage} />
                    <Route exact path="/home" Component={Home}/>
                    <Route exact path="/admin" Component={Admin} />
                    <Route exact path="/dashboard" Component={DBoard} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

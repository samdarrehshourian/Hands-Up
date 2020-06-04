import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import Home from './Home.js'; 
import Courses from './Courses.js'; 
import Messages from './Messages.js'; 
import Achievements from './Achievements.js'; 
import Profile from './Profile.js';
import Schedule from './Schedule';
import '../scss-style/Layout.scss'; 
import homeLogo from '../icons/Sidebar_meny/Home.png'
import coursesLogo from '../icons/Sidebar_meny/Corses.png'
import achivmentsLogo from '../icons/Sidebar_meny/Achivments.png'
import messageLogo from '../icons/Sidebar_meny/Message.png'
import profileLogo from '../icons/Sidebar_meny/Profile.png'





const  MenuBar = () => {
  return (
    <div id = 'layout-container'>
        <Router>
            <nav id = 'side-menu'>
                <ul>
                    <li>
                        <img src={homeLogo} alt="logo" />   
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <img src={coursesLogo} alt="logo" />
                        <Link to="/courses">Courses</Link>
                    </li>
                    <li>
                        <img src={achivmentsLogo} alt="logo" />
                        <Link to="/achievements">Achievements</Link>
                    </li>
                    <li>
                        <img src={messageLogo} alt="logo" />
                        <Link to="/messages">Messages </Link>
                        <span class="badge">2</span>
                    </li>
                    <li>
                        <img src={profileLogo} alt="logo" />
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/courses">
                    <Courses/>
                </Route>
                <Route exact path="/messages">
                    <Messages/>
                </Route>
                <Route exact path="/achievements">
                    <Achievements/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
            </Switch>
        </Router>
        <Schedule/>
    </div>
  );
}

export default MenuBar;
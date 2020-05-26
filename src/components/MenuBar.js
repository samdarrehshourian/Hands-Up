import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'; 
import Home from './Home.js'; 
import Courses from './Courses.js'; 
import Messages from './Messages.js'; 
import Achievements from './Achievements.js'; 
import Profile from './Profile.js';
import '../scss-style/MenuBar.scss'; 

const  MenuBar = () => {
  return (
    <div className = 'container'>
        <Router>
            <div id = 'menu-bar'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/courses">Courses</Link>
                        </li>
                        <li>
                            <Link to="/messages">Messages</Link>
                        </li>
                        <li>
                            <Link to="/achievements">Achievements</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>
            </div>
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
    </div>
  );
}

export default MenuBar;
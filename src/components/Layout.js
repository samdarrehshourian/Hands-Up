import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'; 
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

const  MenuBar = (props) => {
    return (
        <div id = 'layout-container'>
            <Router>
                <nav id = 'side-menu'>
                    <ul>
                        <li>
                            <img src={homeLogo} alt="logo" />   
                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                            <img src={coursesLogo} alt="logo" />
                            <NavLink activeClassName="active" to="/courses">Courses</NavLink>
                        </li>
                        <li>
                            <img src={achivmentsLogo} alt="logo" />
                            <NavLink activeClassName="active" to="/achievements">Achievements</NavLink>
                        </li>
                        <li>
                            <img src={messageLogo} alt="logo" />
                            <NavLink activeClassName="active" to="/messages">Messages </NavLink>
                            <span className="badge">2</span>
                        </li>
                        <li>
                            <img src={profileLogo} alt="logo" />
                            <NavLink activeClassName="active" to="/profile">Profile</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home name={props.name} image={props.image}/>
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
                        <Profile name={props.name} image={props.image}/>
                    </Route>
                </Switch>
            </Router>
            <Schedule/>
        </div>
    );
}


export default MenuBar;
import React from 'react';
import '../scss-style/Header.scss'; 
import logo from '../icons/Logga+Header/handsUp_white.png'

const  Header = (props) => {
  return (
    <div id = 'Header-conatiner'>
      <div id='Header'>
        <img src={logo} alt="Logotype" width="30" height="30"></img>
        <p id="logo">Hands<b>Up</b></p>
        <img id = 'profile-img'src={props.image} alt="Logotype" width="30" height="30"></img>
        <p id ="user">{props.name}</p>
      </div>
    </div>
  );
}

export default Header;
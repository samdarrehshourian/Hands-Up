import React from 'react';
import '../scss-style/Header.scss'; 
import logo from '../icons/Logga+Header/handsUp_white.png'

const  Header = () => {
  return (
    <div id = 'Header-conatiner'>
      <div id='Header'>
        <img src={logo} alt="Logotype" width="30" height="30"></img>
        <p id="logo">Hands<b>Up</b></p>
        <p id ="user">Hi, Daniel</p>
        <div id="profilePicture"></div>
      </div>
    </div>
  );
}

export default Header;
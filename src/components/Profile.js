import React from 'react';
import '../scss-style/Profile.scss';

const  Profile = (props) => {
  return (
    <div className = 'profile-container'>
      <div className = 'profile'>
        <img src={props.image} alt='profile'/>
        <h2>{props.name}</h2>
        <hr></hr>
      </div>
    </div>
  );
}

export default Profile;
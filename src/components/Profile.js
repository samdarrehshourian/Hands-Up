import React from 'react';
import '../scss-style/Profile.scss';
import profileImg from '../example-picture/example-picture.jpg';
import AddPosts from './AddPosts.js' 

const  Profile = () => {
  return (
    <div className = 'profile-container'>
      <div className = 'profile'>
        <img src={profileImg}></img>
        <h2>Daniel Villacorta</h2>
        <hr></hr>
        <AddPosts/>
      </div>
    </div>
  );
}

export default Profile;
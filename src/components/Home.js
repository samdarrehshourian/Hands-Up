import React from 'react';
import '../scss-style/Home.scss';
import AddPosts from './AddPosts.js' 

const  Home = () => {
  return (
    <div className = 'home-container'>
      <div className = 'home'>
        <AddPosts/>
      </div>
    </div>
  );
}

export default Home;
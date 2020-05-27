import React from 'react';
import '../scss-style/Home.scss';
import AddPosts from './AddPosts.js' 

const  Home = () => {
  return (
    <div className = 'home'>
        <h1>Home</h1>
        <AddPosts/>
    </div>
  );
}

export default Home;
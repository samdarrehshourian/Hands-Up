import React from 'react';
import '../scss-style/Home.scss';
import AddPosts from './AddPosts.js' 
import Post from './Post.js' 
import background from '../home-picture/Handsup.jpg'


const  Home = () => {
  return (
    <div className = 'home-container'>
      <div className = 'home'>
        <AddPosts/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>

      </div>
    </div>
  );
}

export default Home;
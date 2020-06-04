import React from 'react';
import '../scss-style/Home.scss';
import AddPosts from './AddPosts.js' 

const  Home = (props) => {
  return (
    <div className = 'home-container'>
      <div className = 'home'>
        <AddPosts name={props.name} image={props.image}/>
      </div>
    </div>
  );
}

export default Home;
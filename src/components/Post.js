import React from 'react';
import profileImg from '../example-picture/example-picture.jpg';
import arrow from '../icons/Flow/Pil_flowToPerson.png';
import like from '../icons/Flow/like.png';
import share from '../icons/Flow/shareWithGroup.png';
import '../scss-style/Post.scss'; 

const  Post = () => {

  return (
      <div className = 'post-container'>
        <div className = 'name-course-info-container'>
            <img className = 'profile-pic' src={profileImg} alt='Profile'/>
            <p>Daniel Villacorta</p>
            <img className = 'arrow-icon' src={arrow} alt='Arrow-icon'/>
            <p>Technology for Social Media</p>
        </div>
        <div className = 'content-container'>
            <p className = 'content'>Hello World!</p>
        </div>
        <hr></hr>
        <div className = 'like-share-container'>
            <img className = 'icon' src={like} alt='Like-icon'/>
            <p className = 'text' id = 'like-text'>Like</p>
            <img className = 'icon' id = 'share-icon'src={share} alt='Share-icon'/>
            <p className = 'text'>Share with group</p>
        </div>
        <hr></hr>
        <div className = 'comment-container'>
            <img className = 'comment-pic' src={profileImg} alt='Profile'/>
            <input className = 'comment-input' type='text' placeholder="Add a comment ..."/>
        </div>
      </div>
  )
}

export default Post;
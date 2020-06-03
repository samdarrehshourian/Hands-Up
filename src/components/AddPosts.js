import React from 'react';
import profileImg from '../example-picture/example-picture.jpg';
import chooseCourseIcon from '../icons/Flow/chooseCourse.png';
import photoIcon from '../icons/Flow/photo.png';
import tagFriendsIcon from '../icons/Flow/tagFriends.png';
import '../scss-style/AddPosts.scss'; 

const  AddPosts = () => {
  return (
    <div className = 'add-post-container'>
      <div id = 'add-post-title'>
        <h4>Add Post</h4>
      </div>
      <div className = 'add-post-content'>
        <div id = 'pic-input-container'>
          <img id = 'profile-pic' src={profileImg} alt='Example of profile picture'/>
          <input type='text' placeholder="Hi Daniel, what's on your mind?"/>
        </div>
        <div className = 'feature-container'>
          <div className = 'feature'>
            <img className = 'add-posts-icons' src={chooseCourseIcon} alt='Icon for choosing courses'/>
            <select id = "course-list">
              <option selected value = "0">Choose course</option>
              <option value = "1">Technology for Social Media</option>
              <option value = "2">Discrete Mathematics</option>
              <option value = "3">Javascript for beginners</option>
              <option value = "4">Statistics</option>
            </select>
          </div>
          <div className = 'feature'>
            <img className = 'add-posts-icons' src={photoIcon} alt='Icon for photos and videos'/>
            <label className = 'feature-lable'>Photo/Video</label>
          </div>
          <div className = 'feature'>
            <img className = 'add-posts-icons' src={tagFriendsIcon} alt='Icon for taging friends'/>
            <label className = 'feature-lable'>Tag Friends</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPosts;
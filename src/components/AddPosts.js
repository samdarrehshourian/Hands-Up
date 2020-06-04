import React, { useState } from 'react';
import profileImg from '../example-picture/example-picture.jpg';
import chooseCourseIcon from '../icons/Flow/chooseCourse.png';
import photoIcon from '../icons/Flow/photo.png';
import tagFriendsIcon from '../icons/Flow/tagFriends.png';
import Post from './Post.js' 
import '../scss-style/AddPosts.scss'; 

const  AddPosts = () => {

  const posts = [
    {
      userImg: profileImg, 
      userName: "Daniel Villacorta", 
      content: "Has someone solved exercises 5.1.12?", 
      course: "Discrete Mathematics",
      img: profileImg, 
      id: 0
    },
    {
      userImg: profileImg, 
      userName: "Amanda Eriksson", 
      content: "Is anyone having problems with Slack? I can’t log in.", 
      course: "Technology for Social Media",
      img: profileImg,
      id: 1
    },
    {
      userImg: profileImg, 
      userName: "Frida Ylitalo", 
      content: "Can someone share their notes with me from todays lecture?", 
      course: "Statistics",
      img: profileImg,
      id: 2
    },
    {
      userImg: profileImg, 
      userName: "Sam Zadeh Darrehshourian", 
      content: "At what time is the exam?", 
      course: "Discrete Mathematics",
      img: profileImg, 
      id: 3
    },
    {
      userImg: profileImg, 
      userName: "Frida Andersson", 
      content: "When will the lecture slides be out?", 
      course: "Discrete Mathematics",
      img: profileImg, 
      id: 4
    }
  ]; 

  const [postList, setPostList] = useState(posts);
  const [newPost, setNewPost] = useState({});

  const addPost = (event) => {
    const newPostList = [...postList, newPost]; 
    setPostList(newPostList); 
    console.log(newPostList); 
    event.preventDefault(); 
}

const handleChange = (event) => {
  setNewPost({...newPost, [event.target.name]:event.target.value});
  console.log({[event.target.name]:event.target.value}); 
 
}

  return (
    <div>
      <div className = 'add-post-container'>
        <div id = 'add-post-title'>
          <h4>Add Post</h4>
        </div>
        <div className = 'add-post-content'>
          <div id = 'pic-input-container'>
            <img id = 'profile-pic' src={profileImg} alt='profile'/>
            <input type='text' name="content" placeholder="Hi Daniel, what's on your mind?" onSubmit={addPost} onChange={handleChange}/>
          </div>
          <div className = 'feature-container'>
            <div className = 'feature'>
              <img className = 'add-posts-icons' src={chooseCourseIcon} alt='Icon for choosing courses'/>
              <select id = "course-list">
                <option defaultValue value = "0">Choose course</option>
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
      {posts.map(post => (
                <Post key={post.id} post={post}/>
            ))}
    </div>
  );
}

export default AddPosts;
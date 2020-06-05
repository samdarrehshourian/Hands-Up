import React, {useState} from 'react';
import profileImg from '../example-picture/example-picture.jpg';
import chooseCourseIcon from '../icons/Flow/chooseCourse.png';
import photoIcon from '../icons/Flow/photo.png';
import tagFriendsIcon from '../icons/Flow/tagFriends.png';
import Post from './Post.js' 
import '../scss-style/AddPosts.scss'; 

const  AddPosts = (props) => {

  var name = props.name; 
  var nameArray = name.split(" ");
  var firstName = nameArray[0];
  var placeholder = "Hi " + firstName + ", what's on your mind?"; 
  
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

  const [postsList, setPostsList] = useState(posts);
  const [newPost, setNewPost] = useState({});

  const addPost = (event) => { 
    const newPostsList = [newPost, ...postsList]; 
    setPostsList(newPostsList); 
    event.preventDefault(); 
  }

  const handleChange = (event) => {

      var selected = document.getElementById("course-list");
      var selectedValue = selected.options[selected.selectedIndex].value;
      
      var selectedCourse;

      if(selectedValue === "0"){
        selectedCourse = "";
      }
      else if(selectedValue === "1"){
        selectedCourse = "Technology for Social Media";
      }
      else if (selectedValue === "2"){
        selectedCourse = "Discrete Mathematics";
      }
      else if (selectedValue === "3"){
        selectedCourse = "Javascript for beginners";
      }
      else if (selectedValue === "4"){
        selectedCourse = "Statistics";
      }

      setNewPost({...newPost, 
        [event.target.name]:event.target.value, 
        name: props.name,
        userImg: props.image, 
        userName: props.name, 
        course: selectedCourse,
        img: props.image, 
        id: postsList.length + 1
    });

  } 

  return (
    <div>
      <div className = 'add-post-container'>
        <div id = 'add-post-title'>
          <h4>Add Post</h4>
        </div>
        <div className = 'add-post-content'>
          <form id = 'pic-input-container' onSubmit={addPost}>
            <img id = 'profile-pic' src={props.image} alt='profile'/>
            <input type='text' name="content" placeholder={placeholder} onChange={handleChange}/>
          </form>
          <div className = 'feature-container'>
            <div className = 'feature'>
              <img className = 'add-posts-icons' src={chooseCourseIcon} alt='Icon for choosing courses'/>
              <select id = "course-list" onChange={handleChange}>
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
      {postsList.map(post => (
                <Post key={post.id} post={post} image={props.image}/>
                ))}
    </div>
  );
}

export default AddPosts;
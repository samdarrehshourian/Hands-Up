import React from 'react';
import arrow from '../icons/Flow/Pil_flowToPerson.png';
import like from '../icons/Flow/like.png';
import share from '../icons/Flow/shareWithGroup.png';
import '../scss-style/Post.scss'; 

const Post = (props) => {

    let courseSelection; 

    if(props.post.course === ""){
        courseSelection = (
            <div className = 'name-course-info-container'>
                <img className = 'profile-pic' src={props.post.userImg} alt='Profile'/>
                <p>{props.post.userName}</p>
            </div>
        )
    }else{
        courseSelection = (
            <div className = 'name-course-info-container'>
                <img className = 'profile-pic' src={props.post.userImg} alt='Profile'/>
                <p>{props.post.userName}</p>
                <img className = 'arrow-icon' src={arrow} alt='Arrow-icon'/>
                <p>{props.post.course}</p>
            </div>
        )
    }

    return (
        <div className = 'post-container'>
            {courseSelection}
            <div className = 'content-container'>
                <p className = 'content'>{props.post.content}</p>
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
                <img className = 'comment-pic' src={props.image} alt='Profile'/>
                <input className = 'comment-input' type='text' placeholder="Add a comment ..."/>
            </div>
        </div>
    )
}

export default Post;
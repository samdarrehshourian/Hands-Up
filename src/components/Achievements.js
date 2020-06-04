import React from 'react';
import '../scss-style/Achievements.scss'; 
import unlock from '../icons/Achievements/Unlocked.png'



const  Achievements = () => {
  return (
    <div className = "achivements_container">
      
      <div id = "achivements_title_button">
        <h1>Achievements</h1>
        <button className = "button_LinkedIn">Connect with LinkedIn</button>
      </div>
      
      
      <div className = "skill_container"> 
        
        <h3>Computer Skills</h3>
        
        <hr></hr>
        
        <div className = "skill_component">
          <ul>
            <li>
              <p>#  HTML</p>
            </li>
            <li>
              <p>#  Javascript</p>
            </li>
            <li>
              <p>#  Matlab</p>
            </li>
            <li>
              <p>#  Microsoft Office</p>
            </li>
            <li>
              <p>#  React.js</p>
            </li>
            <li>
              <p>#  Node.js</p>
            </li>
            <li>
              <p>#  CSS</p>
            </li>
            <li>
              <p>#  Java</p>
            </li>
          </ul>
        </div>
      </div>  

      <div className = "project_container">
          
        <h3>Projects</h3>
          
        <hr></hr>
          
        <div className = "project_component">
          <ul>
            <li>
              <p>#  Project Mangeements</p>
            </li>
            <li>
              <p>#  Prototypedevlopment</p>
            </li>
            <li>
              <p>#  Scrum</p>
            </li>
            <li>
              <p>#  Google Sprint</p>
            </li>  
          </ul>
        </div>
      </div>

      <div className = "other_container">
        
        <h3>Other</h3>
        
        <hr></hr>
        
        <div className = "other_component">
          <ul>
            <li>
              <p>#  Statistics</p>
            </li>
            <li>
              <p>#  Linear algebra</p>
            </li>
            <li>
              <p>#  Design</p>
            </li> 
          </ul>
        </div>
      </div>

      

      <div className = "noteUnlocked_container">
        <div className = "noteUnlock">
          <img id = "image_unlock" src={unlock} alt="Unlocked icon"></img>
          <p>You unlocked a new hashtag sinece last time!</p>
        </div> 
      </div>

    </div>
    
  );
}

export default Achievements;

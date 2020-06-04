import React from 'react';
import '../scss-style/Achievements.scss'; 
import unlock from '../icons/Achievements/Unlocked.png'

const  Achievements = () => {
  return (
    <div className = "achivements">
      <div class = "title">
        <h1>Achievements</h1>
      </div>
      <button class = "button_LinkedIn">Connect with LinkedIn</button>
      <div class = "computerSkills">
        <h3>Computer Skills</h3>
        <hr></hr>
        <div id = "boxes">
          <div class = "box_left">
            <p>#  HTML</p>
            <p>#  Javascript</p>
            <p>#  Matlab</p>
            <p>#  Microsoft Office</p>
          </div>
          <div class = "box_right">
            <p>#  React.js</p>
            <p>#  Node.js</p>
            <p>#  CSS</p>
            <p>#  Java</p>
          </div>
        </div>
      </div>

      <div class = "projects">
        <h3>Projects</h3>
        <hr></hr>
        <div id = "boxes">
          <div class = "box_left">
            <p>#  Project Mangeements</p>
            <p>#  Prototypedevlopment</p>
            <p>#  Scrum</p>
            <p>#  Google Sprint</p>
          </div>
        </div>
      </div>

      <div class = "other">
        <h3>Other</h3>
        <hr></hr>
        <div id = "boxes">
          <div class = "box_left">
            <p>#  Statistics</p>
            <p>#  Linear algebra</p>
            <p>#  Design</p>
          </div>
        </div>
      </div>
      
      <div className = "note_Unlocked">
        <div className = "note_flexContainer">
          <img id = "image_unlock" src={unlock} alt="Unlocked icon"></img>
          <p>You unlocked a new hashtag sinece last time!</p>
        </div>
      </div>
      

    </div>
    
  );
}

export default Achievements;

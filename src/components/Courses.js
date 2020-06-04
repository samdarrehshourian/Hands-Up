import React from 'react';
import '../scss-style/Courses.scss'; 
import F_percent from '../icons/Courses/50percent.png';
import S_percent from '../icons/Courses/75percent.png';
import H_percent from '../icons/Courses/100percent.png';

const  Courses = () => {
  return (
    <div className = "courses_container">
     
      <div className = "courses_titel_subtitle">
        <h1>Courses</h1>
        <h3>Spring Term 2020</h3>
      </div>

      <div className = "course_container">
        <div className = "Tfsm_component">
          <h4>Technology for Social Media</h4>
          
          <p className = "small_text">5TF040</p>
          <p className = "small_text">Teacher: Christopher Blöcker</p>
          
          <hr></hr>

          <p>Deadlines</p>

          <p className = "small_text">05/06/20 - Assignment 3</p>

          <p>75%</p>
          <img src={S_percent} alt="Seventy percent"></img>
        </div>

        <div className = "Discret_component">
         <h4>Introduction to Discreat <br></br> Mathematics</h4>
          
          <p className = "small_text">5MA134</p>
          <p className = "small_text">Teacher: Robert Johansson</p>
          
          <hr></hr>

          <p>Deadlines</p>

          <p>100%</p>
          <img src={H_percent} alt="One hundred percent"></img>
          
        </div>

        <div className = "Statistics_component">
          <h4>Statistics for Engineers</h4>
          
          <p className = "small_text">5MA069</p>
          <p className = "small_text">Teacher: Per Arnqvist</p>
          
          <hr></hr>

          <p>Deadlines</p>

          <p className = "small_text">02/06/20 - Examination 2</p>

          <p>75%</p>
          <img src={S_percent} alt="Seventy percent"></img>
        </div>

        <div className = "Hri_component">
          <h4>Human Robot Interaction</h4>
          
          <p className = "small_text">5DV183</p>
          <p className = "small_text">Teacher: Thomas Hellström</p>
          
          <hr></hr>

          <p>Deadlines</p>

          <p className = "small_text">14/05/20 - Assignment 4</p>
          <p className = "small_text">25/05/20 - Assignment 5</p>
          <p className = "small_text">28/05/20 - Assignment 6</p>

          <p>50%</p>
          <img src={F_percent} alt="Fifty percent"></img>
        </div>
      </div>


    </div>
  );
}

export default Courses;
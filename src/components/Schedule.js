import React from 'react';
import '../scss-style/Schedule.scss'; 
import schema from '../icons/Schema/schema.png';
import leftArrow from '../icons/Schema/PilLeft_schema.png';
import rightArrow from '../icons/Schema/PilRight_schema.png';

const Schedule = () => {
  return (
    <div id = 'schedule-container'>
      <div className = 'schedule'>
        <div className = 'image'><img src={schema} alt="Schemalogo" width="20" height="20"></img></div>
        <h1>Schedule</h1>
      </div>

      <div id = 'day-container'>
        <div className = 'switch-day-icon-container'><img src={leftArrow} alt="Arrow" width="15" height="15"></img></div>
        <div className = 'show-day-container'><p>4th June</p></div>
        <div className = 'switch-day-icon-container'><img src={rightArrow} alt="Arrow" width="15" height="15"></img></div>
      </div>

      <div className = 'current-day-schedule-container'>
        <div className = 'current-day-schedule'>
          <div className = 'current-lesson'>
            <div className = 'time'>
              <p className = 'start'>08.15</p>
              <p className = 'end'> 10.00</p>
            </div>
            <div id = 'colour1'></div>
            <div className = 'course'>
              <p>Technology for Social Media</p>
              <p>Teacher: Christopher Blöcker</p>
            </div>
          </div>

          <div className = 'current-lesson'>
            <div className = 'time'>
              <p className = 'start'>10.15</p>
              <p className = 'end'>12.00</p>
            </div>
            <div id = 'colour2'></div>
            <div className = 'course'>
              <p>Current topic in ITD</p>
              <p>Teacher: Ulrik Söderström</p>
            </div>
          </div>

          <div className = 'current-lesson'>
            <div className = 'time'>
              <p className = 'start'>12.15</p>
              <p className = 'end'>13.00</p>
            </div>
            <div id = 'colour3'></div>
            <div className = 'course'>
              <p>Lunch Meeting with Dream Team</p>
            </div>
          </div>

          <div className = 'current-lesson'>
            <div className = 'time'>
              <p className = 'start'>13.15</p>
              <p className = 'end'>15.00</p>
            </div>
            <div id = 'colour4'></div>
            <div className = 'course'>
              <p>Technology for Social Media</p>
              <p>Teacher: Christopher Blöcker</p>
            </div>
          </div>

          <div className = 'current-lesson'>
            <div className = 'time'>
              <p className = 'start'>17.00</p>
            </div>
            <div id = 'colour5'></div>
            <div className = 'course'>
              <p>Last day to send in assignment 2!</p>
            </div>
          </div>

        </div>
      </div>  

      <div id = 'courses'>

        <div className = 'subject'>
          <div id = "subjectColour1">

          </div>
          <div className = 'course'>
            <p>Technology for Social Media</p>
          </div>
        </div>

        <div className = 'subject'>
          <div id = "subjectColour2">

          </div>
          <div className = 'course'>
            <p>Current topic in ITD</p>
          </div>
        </div>

        <div className = 'subject'>
          <div id = "subjectColour3">

          </div>
          <div className = 'course'>
            <p>Introduction to Discrete Mathematics</p>
          </div>
        </div>

        <div className = 'subject'>
          <div id = "subjectColour4">

          </div>
          <div className = 'course'>
            <p>Daniel Villacorta</p>
          </div>
        </div>

        <div className = 'subject'>
          <div id = "subjectColour5">

          </div>
          <div className = 'course'>
            <p>Deadlines</p>
          </div>
        </div>

        <div className = 'subject'>
          <div id = "subjectColour6">

          </div>
          <div className = 'course'>
            <p>Add</p>
          </div>
        </div>
      </div>

            
    </div>
  );
}

export default Schedule;
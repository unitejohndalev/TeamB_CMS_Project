import React from "react";
const CourseListCard = () => {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
        <h1>Course List</h1>
        </div>
       
        <div className="CourseList-container">
          <div className="CourseList-card">
            <div className="CourseList-card-details">
              <p className="CourseList-text-title">PL001:</p>
              <h3 className='CourseList-h3-card'>Java Programming</h3>
            </div>
            <button className="CourseList-button">More info</button>
          </div> <br /><br />
  
          <div className="CourseList-card">
            <div className="CourseList-card-details">
              <p className="CourseList-text-title">PL002:</p>
              <h3 className='CourseList-h3-card'>Basic HTML & CSS</h3>
            </div>
            <button className="CourseList-button">More info</button>
          </div> <br /><br />
  
          <div className="CourseList-card">
            <div className="CourseList-card-details">
              <p className="CourseList-text-title">PL003:</p>
              <h3 className='CourseList-h3-card'>C++ Programming</h3>
            </div>
            <button className="CourseList-button">More info</button>
          </div> <br /><br />
  
          <div className="CourseList-card">
            <div className="CourseList-card-details">
              <p className="CourseList-text-title">PL004:</p>
              <h3 className='CourseList-h3-card'>C# Programming for Beginners</h3>
            </div>
            <button className="CourseList-button">More info</button>
          </div> <br /><br />
         
        </div>
      </div>
    );
  };
  
  export default CourseListCard;
  
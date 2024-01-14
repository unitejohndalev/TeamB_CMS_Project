import React from 'react';
import CourseListCard from './CourseListCard';
import AddNewCourse from './AddNewCourse';
import CourseOverview from './CourseOverview';

const CourseList = () => {
  return (
    <div>
    {/* place the component you want to test here */}
     { <CourseListCard/> }
     { <AddNewCourse/> }
     {<CourseOverview/>}

    </div>
  );
};

export default CourseList;

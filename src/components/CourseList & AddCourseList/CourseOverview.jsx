import React from 'react'
import CourseOverviewCard from './CourseOverviewCard'
import CourseListCard from './CourseListCard'
import AddNewCourseCard from './AddNewCourseCard'

const CourseOverview = () => {
  return (
    <div>
      <CourseListCard/>
      <AddNewCourseCard/>
      <CourseOverviewCard/>
    </div>
  )
}

export default CourseOverview

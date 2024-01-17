import React from 'react'
import AddNewChapter from './AddNewChapter'
import CourseOverviewCard from './CourseOverviewCard'
import CourseListCard from './CourseListCard'
import AddNewCourseCard from './AddNewCourseCard'

const CourseOverview = () => {
  return (
    <div>
      <CourseListCard/>
      <AddNewCourseCard/>
      <CourseOverviewCard/>
      <AddNewChapter/>
    </div>
  )
}

export default CourseOverview

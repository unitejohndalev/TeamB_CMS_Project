import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { IoAdd } from "react-icons/io5";

const CourseOverviewById = () => {
      const [courses, setCourses] = useState([]);

      //user params to navigate specific id
      let { id } = useParams();

      useEffect(() => {
        loadChapters();
      }, [id]);

 const loadChapters = async () => {
   try {
     const result = await axios.get(`http://localhost:8080/api/courses/${id}`);
     // Ensure that result.data is always an array by converting it
     const coursesArray = Array.isArray(result.data)
       ? result.data
       : [result.data];
     setCourses(coursesArray);
   } catch (error) {
     console.error("Error loading chapters:", error);
   }
 };
      console.log(courses);
  return (
    <div>
      {courses.map((course, idx) => (
        <div key={idx}>
          {Array.isArray(course.chapters) &&
            course.chapters.map((chapter, idx) => (
              <div key={idx}>
                <p>{chapter.chapter_title} </p>
                <Link to={`/editchaptertitle/${chapter.chapter_id}`}>Edit</Link>
              </div>
            ))}
      <div className="lg:w-[65%] lg:flex lg:justify-center gap-5 ml-16">
        <Link
          to={`/createnewchaptertitle/${course.course_id}`}
          className="lg:rounded-[1rem] h-[5vh] lg:h-[50px] 2xl:h-[65px] flex items-center justify-center w-[100%] lg:w-[100%] cursor-pointer bg-[#BCE8B1]">
          <div className="flex items-center justify-center w-full">
            <span className="pr-4">
              <IoAdd className="text-[2rem] lg:text-[2.5rem] text-white" />
            </span>
            <span className="text-shadow lg:text-[1rem] lg:font-bold 2xl:text-[24px]  text-[#070101] text-opacity-[55%]">
              Add Chapter Title
            </span>
          </div>
        </Link>
        <div className="lg:flex lg:justify-space-between"></div>
      </div>
        </div>
      ))}
    </div>
  );
}

export default CourseOverviewById

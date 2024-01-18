import React from 'react'
import CourseOverviewCard from './CourseOverviewCard'
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const CourseOverview = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/courselist");
  };

  return (
    <div> 
      <div>
    {/* Use react icon instead of word back */}
    <div
      className="flex items-center mt-3 cursor-pointer w-[10%]"
      onClick={goBack}>
      <span className="text-[2.5rem]">
        <IoArrowBackCircle />
      </span>
      <span className="text-[1rem] pl-1">Back</span>
    </div>
  </div>
      <CourseOverviewCard/>
    
    </div>
  )
}

export default CourseOverview

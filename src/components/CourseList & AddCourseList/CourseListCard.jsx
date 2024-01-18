/*January 10, 2024*/
import React, { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";

import axios from "axios";

import { Link } from "react-router-dom";

//import mock data
import data from '../../mockData/CourselistCard.json'


const CourseListCard = () => {
  // *NOTE
  //if data is coming from db use useState hook to store the data
  //sample: const [courses, setCourses] = useState([])

  const [courses, setCourses] = useState([]);

  /* january 172024*/
  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/getCourse");
    setCourses(result.data);
  };
 /*January 15 2024 */
  
 //course list mock data
 const {courselist} = data
  return (
    <>
      {/* 1/12/2024 UI development and Mobile responsiveness */}

      <div className="">
        {/* 1/15/2024 functions and buttons */}
        <div className="">
          <div className=" xl:w-[1244px] w-[90%] mt-10 flex mx-auto flex-col lg:center-row lg:w-[50%] lg:m-auto lg:mt-5 items-center gap-5">
            {/*January 15 2024, API connection of frontend to backend can fetch data from the backend*/}
            <div className="text-black lg:font-bold text-[.8rem] py-1 lg:py-0 lg:text-[1.2rem] w-full flex justify-center items-center ">
              <p className="lg:font-bold">Course List</p>
            </div>
            {courselist.map((course, idx) => {
              return (
                <div key={idx} className="w-full rounded-md shadow-md ">
                  <div className="flex px-0 py-0 rounded-md xl:h-[115px]">
                    <div className="bg-[#BCE8B1] py-1 justify-center text-center text-[.8rem] lg:text-[1rem] w-[30%] lg:w-[20%] lg:p-5 rounded-l-sm lg:rounded-l-md">
                      <p className="lg:font-medium">{course.id}</p>
                    </div>

                    <p
                      className="text-white lg:font-bold text-[.8rem] py-1 lg:py-0 lg:text-[1.2rem] w-full flex justify-center items-center
                   rounded-r-sm lg:rounded-r-md 	bg-[#126912] ">
                      {course.courseTitle}
                    </p>
                  </div>
                </div>
              );
            })}

            {/*January 15 2024*/}

            <Link to="/AddNewCourse">
              <div
                type="add"
                className=" h-[10vh] mb-10 flex w-[50%] lg:w-[30vw] cursor-pointer">
                <div className="bg-[#87D275] w-[30%]  flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
                  <span>
                    <IoAdd className="text-[2rem] lg:text-[3rem] text-white" />
                  </span>
                </div>
                <div className="bg-[#126912] text-white lg:font-bold h-[5vh] lg:h-[10vh]  w-full flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
                  <span className="text-[.8rem] lg:text-[1.3rem]">
                    Add New Course
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseListCard;
/*January 10, 2024*/

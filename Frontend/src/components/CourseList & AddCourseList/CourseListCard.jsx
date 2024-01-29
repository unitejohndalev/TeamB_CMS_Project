/*January 10, 2024*/
import React, { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";
//import mock data
import data from "../../mockData/CourselistCard.json";
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
    const result = await axios.get("http://localhost:8080/api/courses");
    setCourses(result.data);
  };
  /*January 15 2024 */

  //course list mock data
  console.log(courses);

  return (
    <>
      {/* 1/12/2024 UI development and Mobile responsiveness */}

      <div className="mt-[70px]">
        {/* 1/15/2024 functions and buttons */}
        <div className="">
          <div className=" xl:w-[1244px] w-[90%] flex mx-auto flex-col lg:center-row lg:w-[80vw] lg:m-auto lg:mt-5 items-center h-[90vh] relative gap-5">
            {/*January 15 2024, API connection of frontend to backend can fetch data from the backend*/}
            <div className="text-black lg:font-bold text-[.8rem] py-5 lg:py-0 lg:text-[2rem] w-full flex justify-center items-center ">
              <p className="pb-5 2xl:text-[48px] lg:font-bold text-shadow mb-5">
                Course List
              </p>
            </div>
            <div className="h-[55vh] overflow-auto">
            <Link to="/courseoverview">
              {courses.map((course, idx) => {
                return (
                  <div key={idx} className="w-[60vw] mb-5 rounded-md shadow-md">
                    <div className="flex px-0 py-0 rounded-md xl:h-[115px]">
                      <div className="bg-[#BCE8B1] flex py-1 item-center justify-center text-center text-[.8rem] lg:text-[1rem] w-[30%] lg:w-[20%] lg:p-5 rounded-l-sm lg:rounded-l-md">
                        <p className="lg:font-medium text-shadow">
                          PL00{course.course_id}
                        </p>
                      </div>

                      <p
                        className="text-white text-shadow lg:font-bold text-[.8rem] py-1 lg:py-0 lg:text-[1.2rem] w-full flex justify-center items-center


                   rounded-r-sm lg:rounded-r-md 	bg-[#126912] ">
                        {course.course_title}

                      </p>
                    </div>
                  </div>
                );
              })}
            </Link>
            </div>
            {/*January 15 2024*/}
            {/*January 19 2024 -gem modify buttons add footer*/}

            <Link className="absolute bottom-0" to="/AddNewCourse">
              <div className=" h-[10vh] mb-5 flex w-[50%] lg:w-[80vw] overflow-auto abslolute items-center justify-center">
                <div className="bg-[#87D275] w-[10%]  flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
                  <span>
                    <IoAdd className="lg:text-[2rem] text-white" />
                  </span>
                </div>
                <div className="bg-[#126912] text-white lg:font-bold h-[5vh] lg:h-[10vh]  w-[30%] flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
                  <span className=" 2xl:text-[40px] text-shadow">
                    Add New Course
                  </span>
                </div>
              </div>
            </Link>
          </div>
          <footer className="flex justify-center py-20">
            <div>
              <p className="text-[#4D9349] font-medium">
                All Rights Reserved | Copyright 2024
              </p>
            </div>
          </footer>
        </div>
        {/*January 19 2024 -gem modify buttons add footer*/}
      </div>
    </>
  );
};

export default CourseListCard;
// /*January 23, 2024*/

import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import { BiSave } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

/*January 17 2024 API for creating courses from frontend directly to the database  */

const AddNewCourseCard = () => {
  let navigate = useNavigate;
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    course_id: "",
    course_description: "",
    course_title: "",
    chapter_title: "",
  });

  useEffect(() => {
    const loadCourses = async () => {
      const result = await axios.get("http://localhost:8080/getCourse");
      setCourses(result.data);
    };

    loadCourses();
  }, []);

  const handleInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/createCourse", course);
    navigate("/");
  };

  

  /*January 17 2024 API for creating courses from frontend directly to the database  */

  console.log(courses);

  const { crs_title, chap_title, description } = course;

  return (
    // 1/15/2024 functions, buttons, and routes
    <div>
    {/* //january 18 2024
  //navigate to back course list */}
      {/* Content */}
      <div className="mt-5 w-full h-[100vh] ">
        <div className="m-5 text-black lg:font-bold lg:text-3xl py-1 lg:py-0 lg:text-[1.2rem] lg:w-[98%] flex justify-center items-center">
          <p className="lg:font-bold">Create New Course</p>
        </div>
        <div className="mb-.5 hidden lg:flex lg:border-b-8 lg:rounded-lg lg:border-b-[#BCE8B1] lg:w-[70%] m-auto"></div>{" "}
        {/* line under course title */}
        <div className="mb-5 hidden lg:flex lg:border-b-8 lg:rounded-lg lg:border-b-[#126912] lg:w-[70%] m-auto"></div>{" "}
        {/* line under course title */}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col items-center justify-center w-[90%] lg:w-[70%] m-auto gap-5">
            <input
              type="text"
              className="bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center lg:rounded-lg opacity-[50%] w-full p-4"
              placeholder="Add course Title"
              name="course_title"
              value={crs_title}
              onChange={(e) => handleInputChange(e)}
            />
            <textarea
              cols="5"
              rows="5"
              name="course_description"
              value={description}
              className="resize-none bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center lg:rounded-lg opacity-[50%] lg:w-full m-auto p-5 "
              placeholder="Add new brief description"
              onChange={(e) => handleInputChange(e)}
            />
            <input
              type="text"
              className="bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center lg:rounded-lg opacity-[50%] w-full p-4"
              placeholder="Add Chapter Title"
              name="chapter_title"
              value={chap_title}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
{/* //january 18 2024
  //navigate to back course list */}
  {/*January 19 2024 -gem */}
          <div className="lg:w-[100%] lg:flex lg:justify-center grid gap-4 grid-cols-2">
           <Link to ="/courseoverview">
            <button className="w-full mb-5 lg:mb-0 lg:mt-5 btn-style lg:w-[120px] lg:flex lg:justify-center xl:w-[170px] rounded-full cursor-pointer">
              <div className="mr-1">
                <span>
                  <BiSave className=" lg:text-[1.5rem] text-white " />
                </span>
              </div>
              <div>Save</div>
            </button>
            </Link>
            <div className="lg:flex lg:justify-space-between"></div>
            <Link to="/courselist">
              <button className="w-full mb-5 lg:mb-0 lg:mt-5 btn-style lg:w-[120px] lg:flex lg:justify-center xl:w-[170px] rounded-full ">
                <div className="mr-1">
                  <span>
                    <ImCancelCircle className=" lg:text-[1.5rem] text-white " />
                  </span>
                </div>{" "}
                Cancel
              </button>
            </Link>
          </div>
        </form>
        <footer className="flex justify-center pt-20">
        <div>
          <p className="text-[#4D9349] font-medium">All Rights Reserved | Copyright 2024</p>
        </div>
      </footer>
      </div>
        {/*January 19 2024 -gem */}

    </div>
  );
};

export default AddNewCourseCard;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiSave } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const CreateNewCourse = () => {
  let navigate = useNavigate();

  const [course, setCourse] = useState({
    course_id: "",
    course_title: "",
    course_description: "",
    chapter_id: "",
    chapter_title: "",
  });

  const { courseTitle, description, chapTitle } = course;

  const handleInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", course);
    await axios.post("http://localhost:8080/api/courses", course);
    navigate("/courselist");
  };

  console.log(course);

  //react hook for tooltip
  const [showTooltipCourseTitle, setShowTooltipCourseTitle] = useState(false);
  const [showTooltipCourseDescription, setShowTooltipCourseDescription] =
    useState(false);
  const [showTooltipChapterTitle, setShowTooltipChapterTitle] = useState(false);

  return (
    <div className="mt-[70px] w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="m-5 text-black lg:font-bold lg:text-3xl py-1 lg:py-0 lg:text-[2rem] lg:w-[98%] flex justify-center items-center">
        <p className="mb-10 lg:font-bold text-shadow">Create New Course</p>
      </div>

      <form onSubmit={handleSubmit} className="lg:w-[70%] m-auto">
        <div className="relative w-full mb-5">
          {/* COURSE TITLE INPUT */}

          <input
            maxLength={70}
            type="text"
            className={
              showTooltipCourseDescription
                ? "blur-sm bg-[#BCE8B1] placeholder-[#070101] shadow-lg placeholder:text-shadow placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border"
                : "bg-[#BCE8B1] placeholder-[#070101] shadow-lg placeholder:text-shadow placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border"
            }
            placeholder="Add course Title"
            name="course_title"
            value={courseTitle}
            onChange={(e) => handleInputChange(e)}
            onMouseOver={() => setShowTooltipCourseTitle(true)}
            onMouseLeave={() => setShowTooltipCourseTitle(false)}
          />
          {showTooltipCourseTitle && (
            <div className="absolute top-[-3.5rem] left-10 bg-[#fff]  w-[25%] p-1 rounded-lg border-[1px] border-[#EBFFE5]">
              <p className="text-[.8rem] text-[#4D4141] text-opacity-[53%]">
                Maximum of 70 alphanumeric and special characters.
              </p>
            </div>
          )}
        </div>

        {/* COURSE BRIEF DESCRIPTION TEXTAREA */}

        <div className="relative w-full mb-5">
          <textarea
            maxLength={250}
            rows="5"
            name="course_description"
            value={description}
            className={
              showTooltipChapterTitle
                ? "resize-none bg-[#BCE8B1] placeholder-[#070101] shadow-lg placeholder:text-shadow placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border blur-sm"
                : "resize-none bg-[#BCE8B1] placeholder-[#070101] shadow-lg placeholder:text-shadow placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border"
            }
            placeholder="Add new brief description"
            onChange={(e) => handleInputChange(e)}
            onMouseOver={() => setShowTooltipCourseDescription(true)}
            onMouseLeave={() => setShowTooltipCourseDescription(false)}
          />
          {showTooltipCourseDescription && (
            <div className="absolute top-[-3.5rem] left-10 bg-[#fff]  w-[25%] p-1 rounded-lg border-[1px] border-[#EBFFE5]">
              <p className="text-[.8rem] text-[#4D4141] text-opacity-[53%]">
                Maximum of 500 alphanumeric and special characters.
              </p>
            </div>
          )}
        </div>

        {/* CHAPTER TITLE TEXTAREA */}

        <div className="relative w-full mb-5">
          <input
            maxLength={70}
            type="text"
            className="bg-[#BCE8B1] placeholder-[#070101] shadow-lg placeholder:text-shadow placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border"
            placeholder="Add Chapter Title"
            name="chapter_title"
            value={chapTitle}
            onChange={(e) => handleInputChange(e)}
            onMouseOver={() => setShowTooltipChapterTitle(true)}
            onMouseLeave={() => setShowTooltipChapterTitle(false)}
          />
          {showTooltipChapterTitle && (
            <div className="absolute top-[-3.5rem] left-10 bg-[#fff]  w-[25%] p-1 rounded-lg border-[1px] border-[#EBFFE5]">
              <p className="text-[.8rem] text-[#4D4141] text-opacity-[53%]">
                Maximum of 70 alphanumeric and special characters.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 lg:mt-10 lg:gap-x-20 lg:w-full lg:flex lg:justify-center">
          <button className=" rounded-[15px] 2xl:rounded-[20px] w-full btn-style lg:w-[180px] lg:h-[40px] 2xl:h-[65px] lg:flex lg:justify-center lg:items-center xl:w-[170px]  cursor-pointer">
            <div className="mr-1">
              <span>
                <BiSave className="lg:text-[1.5rem] text-white" />
              </span>
            </div>
            <div>SAVE</div>
          </button>

          <Link to="/courselist">
            <button className="w-full btn-style lg:w-[180px]  lg:h-[40px] 2xl:h-[65px] lg:items-center lg:flex lg:justify-center xl:w-[170px] rounded-[15px] 2xl:rounded-[20px]">
              <div className="mr-1">
                <span>
                  <ImCancelCircle className="lg:text-[1.5rem] text-white" />
                </span>
              </div>
              <div>CANCEL</div>
            </button>
          </Link>
        </div>
      </form>

      <footer className="flex justify-center pt-20 pb-5">
        <div>
          <p className="text-[#4D9349] font-medium">
            All Rights Reserved | Copyright 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CreateNewCourse;

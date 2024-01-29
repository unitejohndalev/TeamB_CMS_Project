import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BiSave } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";

const CopyofCreateNewCourse = () => {
  let navigate = useNavigate();

  const [course, setCourse] = useState({
    course_id: "",
    course_title: "",
    course_description: "",
    chapters: [
      {
        chapter_id: "",
        chapter_title: "",
      },
    ],
  });

  const { course_title, course_description, chapters } = course;

  const handleInputChange = (e, chapterIndex) => {
    const { name, value } = e.target;

    if (name.startsWith("chapter_title")) {
      const updatedChapters = [...chapters];
      updatedChapters[chapterIndex] = {
        ...updatedChapters[chapterIndex],
        chapter_title: value,
      };
      setCourse((prevCourse) => ({
        ...prevCourse,
        chapters: updatedChapters,
      }));
    } else {
      setCourse((prevCourse) => ({
        ...prevCourse,
        [name]: value,
      }));
    }
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
    <div className=" flex flex-col items-center  m-auto bg-white lg:max-w-[672px] lg:h-[500px] 2xl:h-[672px] 2xl:max-w-[724px] ">
      <div className="m-5 text-black lg:font-bold lg:text-3xl py-1 lg:py-0 lg:text-[2rem] lg:w-[98%] flex justify-center items-center">
        <p className="mb-10 lg:font-bold text-shadow">Create New Course</p>
      </div>

      <form onSubmit={handleSubmit} className="lg:w-[70%] m-auto">
        <div className="relative w-full mb-5">
          {/* COURSE TITLE INPUT */}

          <input
            maxLength={70}
            type="text"
            className="bg-[#BCE8B1] placeholder-[#070101] shadow-lg placeholder:text-shadow placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border"
            placeholder="Add course Title"
            name="course_title"
            value={course_title}
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
            value={course_description}
            className="resize-none bg-[#BCE8B1] placeholder-[#070101] shadow-lg placeholder:text-shadow placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border "
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

        {/* {chapters.map((chapter, index) => (
          <div className="relative w-full mb-5" key={index}>
            <input
              maxLength={70}
              type="text"
              className="bg-[#BCE8B1] placeholder-[#070101] shadow-lg placeholder:text-shadow placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border"
              placeholder="Add Chapter Title"
              name={`chapter_title_${index}`}
              value={chapter.chapter_title}
              onChange={(e) => handleInputChange(e, index)}
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
        ))} */}

        <div className="grid grid-cols-2 lg:w-full lg:flex lg:justify-center">
          <button className="">
            <p>Cancel</p>
          </button>

          <Link to="/courselist">
            <button className="">
              <p>Create</p>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CopyofCreateNewCourse;

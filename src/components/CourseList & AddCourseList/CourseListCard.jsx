import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

// import mock data json file
import data from "../../mockData/CourselistCard.json";

const CourseListCard = () => {
  const [courses, setCourses] = useState(data.courselist);

  const handleTitleEdit = (idx, newTitle) => {
    const updatedCourses = [...courses];
    updatedCourses[idx].courseTitle = newTitle;
    setCourses(updatedCourses);
  };

  const handleKeyDown = (event, idx) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newTitle = event.target.innerText;
      handleTitleEdit(idx, newTitle);
    }
  };

  return (
    <>
      <div className="">
        <div className="w-[90%] mt-10 flex mx-auto flex-col lg:center-row lg:w-[50%] lg:m-auto lg:mt-5 items-center gap-5">
          {courses.map((course, idx) => {
            return (
              <div key={idx} className="w-full rounded-md shadow-md">
                <div className="flex px-0 py-0 rounded-md">
                  <div className="bg-[#BCE8B1] py-1 justify-center text-center text-[.8rem] lg:text-[1rem] w-[30%] lg:w-[20%] lg:p-5 rounded-l-sm lg:rounded-l-md">
                    <p className="lg:font-medium">{course.description}</p>
                  </div>

                  <p
                    contentEditable="true"
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className="text-white lg:font-bold text-[.8rem] py-1 lg:py-0 lg:text-[1.2rem] w-full flex justify-center items-center
                   rounded-r-sm lg:rounded-r-md bg-[#126912]"
                  >
                    {course.courseTitle}
                  </p>
                </div>
              </div>
            );
          })}
          <Link to="/AddNewCourse">
            <button>
              <div
                type="add"
                className="h-[10vh] mb-10  flex items-center justify-center w-[50%] lg:w-[50%] cursor-pointer"
              >
                <div className="bg-[#87D275] w-[30%]  flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
                  <span>
                    <IoAdd className="text-[2rem] lg:text-[3rem] text-white" />
                  </span>
                </div>
                <div className="  bg-[#126912] text-white lg:font-bold h-[5vh] lg:h-[10vh] lg:w-[100vh] w-full flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
                  <span className="text-[.8rem] lg:text-[1.3rem]">
                    Add New Course
                  </span>
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CourseListCard;

import React, { useState, useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import axios from "axios";
import { Link } from "react-router-dom";

const AddNewCourseCard = () => {
  

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

    await axios.post('http://localhost:8080/createCourse', course);
  

    await axios.post("http://localhost:8080/createCourse", course);

  };

  console.log(courses);

  const { crs_title, chap_title, description } = course;

  return (
    // 1/15/2024 functions, buttons, and routes
    <div>
      {/* Navigation Bar */}
      <Link to="/CourseOverview"/>
      <div className="flex justify-end items-center p-4 text-white">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="text-sm bg-white text-[#126912] px-3 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>


      {/* Content */}
      <div className="mt-5">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col items-center justify-center w-[90%] lg:w-[50%] m-auto gap-5">
            <input
              type="text"
              className="bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center opacity-[50%] w-full"
              placeholder="Add course Title"
              name="course_title"
              value={crs_title}
              onChange={(e) => handleInputChange(e)}
            />

            <textarea
              name="course_description"
              value={description}
              className="resize-none bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center opacity-[50%] w-full"
              placeholder="Add new brief description"
              onChange={(e) => handleInputChange(e)}
            />

            <input
              type="text"
              className="bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center opacity-[50%] w-full"
              placeholder="Add Chapter Title"
              name="chapter_title"
              value={chap_title}
              onChange={(e) => handleInputChange(e)}
            />

            <input
              type="text"
              className="bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center opacity-[50%] w-full"
              placeholder="Add Chapter Title"
              name="chapter_title"
              value={chap_title}
              onChange={(e) => handleInputChange(e)}
            />

            {/* Repeat the input fields as needed */}

            <div className="h-[10vh] mb-10 flex items-center justify-center w-[60%] lg:w-[50%] cursor-pointer">
              <div className="bg-[#126912] w-[50%] flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
                <span>
                  <IoAdd className="text-[2rem] lg:text-[3rem] text-white" />
                </span>
              </div>
           
                <button>
                  <div className="bg-[#BCE8B1] text-white lg:font-bold lg:h-[10vh] pr-40 flex items-center justify-center rounded-r-sm lg:rounded-r-md">
                    <span className="text-[.8rem] lg:text-[1.1rem] lg:w-[33vh] text-[#070101] opacity-[55%]">
                      Add New Chapter Title
                    </span>
                  </div>
                </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewCourseCard;

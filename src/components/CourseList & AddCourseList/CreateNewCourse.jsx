import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { BiSave } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';

const CreateNewCourse = () => {


  let navigate=useNavigate()

  const [course, setCourse] = useState({
    course_id: '',
    course_title: '',
    course_description: '',
    chapter_id:'',
    chapter_title: '',
  });

  const {courseTitle, description, chapTitle} = course;

  const handleInputChange = (e) => {
    setCourse({...course,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', course);
    await axios.post('http://localhost:8080/api/courses', course);
    navigate("/courselist");
  };

 
  console.log(course);

  
  return (
    <div className="mt-[70px] w-full h-[100vh] flex flex-col items-center justify-center">
      <div className="m-5 text-black lg:font-bold lg:text-3xl py-1 lg:py-0 lg:text-[2rem] lg:w-[98%] flex justify-center items-center">
        <p className="mb-10 lg:font-bold text-shadow">Create New Course</p>
      </div>

      <form onSubmit={handleSubmit} className="lg:w-[70%] m-auto">
        <div className="mb-5 w-full relative">
          <input
            maxLength={70}
            type="text"
            className="bg-[#BCE8B1] placeholder-[#070101] placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border"
            placeholder="Add course Title"
            name="course_title"
            value={courseTitle}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-5 w-full relative">
          <textarea
            maxLength={250}
            rows="5"
            name="course_description"
            value={description}
            className="resize-none bg-[#BCE8B1] placeholder-[#070101] placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border"
            placeholder="Add new brief description"
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="mb-5 w-full relative">
          <input
            maxLength={70}
            type="text"
            className="bg-[#BCE8B1] placeholder-[#070101] placeholder:text-center rounded-lg opacity-50 w-full p-4 box-border"
            placeholder="Add Chapter Title"
            name="chapter_title"
            value={chapTitle}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="lg:w-full lg:flex lg:justify-center grid gap-4 grid-cols-2 mt-5">
          
            <button className="w-full btn-style lg:w-[120px] lg:flex lg:justify-center xl:w-[170px] rounded-full cursor-pointer">
              <div className="mr-1">
                <span>
                  <BiSave className="lg:text-[1.5rem] text-white" />
                </span>
              </div>
              <div>Save</div>
            </button>
          

          <Link to="/courselist">
            <button className="w-full btn-style lg:w-[120px] lg:flex lg:justify-center xl:w-[170px] rounded-full">
              <div className="mr-1">
                <span>
                  <ImCancelCircle className="lg:text-[1.5rem] text-white" />
                </span>
              </div>
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
  );
};

export default CreateNewCourse;

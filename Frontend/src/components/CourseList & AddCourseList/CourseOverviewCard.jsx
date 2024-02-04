//2/3/2024 junite, fix course title and search bar width


import React, { useState, useEffect } from "react";
import axios from "axios";

import { TfiSave } from "react-icons/tfi";

//import mockdata
import data from "../../mockData/CourseOverviewCard.json";

//import search icon
import { IoSearchSharp } from "react-icons/io5";
//edit icon
import { FaEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

//back icon and back function
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import EditChapterTitle from "./EditChapterTitle";
import CourseOverviewById from "./CourseOverviewById";

const CourseOverviewCard = () => {
  const [chapter, setChapter] = useState({
    // chapter_id: "",
    chapter_title: "",
  });
  /*January 17 2023 API connection from backend to front end displaying data */

  //mockdata chapter

  // //back function
  // const navigate = useNavigate();

  // const goBack = () => {
  //   navigate(-1);
  // };

  //react hook for edit and save chapter title
  const [showSave, setShowSave] = useState(false);
  const [showEdit, setShowEdit] = useState(true);

  const handleEdit = () => {
    setShowSave(true);
    setShowEdit(false);
  };
  const handleSave = () => {
    setShowEdit(true);
    setShowSave(false);
  };

  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  const {chapter_title} = chapter;
  return (
    <>
      {/*January 19 2024 -gem modify responsiveness*/}

      <div className="relative w-full m-auto h-[120vh] mt-[70px]  ">
        <div className="relative w-full h-[120vh] m-auto ">
          {/* <div
            className="absolute left-2 top-0 flex items-center cursor-pointer w-[10%]"
            onClick={goBack}>
            <span className="text-[2.5rem]">
              <IoArrowBackCircle />
            </span>
            <span className="text-[1rem] pl-1">Back</span>
          </div> */}
          <div className="w-[90%] mt-10 flex mx-auto flex-col lg:center-row lg:w-[90%] lg:m-auto  items-center gap-8">
            <div className="lg:font-bold py-1 lg:py-0 lg:text-[2rem] w-full flex justify-center items-center">
              <p className="lg:font-bold TeamB_text-shadow ">
                Course Overview
              </p>
            </div>
            <div className="w-full lg:max-w-[800px]">
              <div className="text-black  w-full lg:font-bold text-[.8rem] py-5 lg:py-0 lg:text-[2rem]  flex justify-between items-center">
                <p className="lg:font-bold TeamB_text-shadow">HTML And CSS</p>
                
                <div className="relative  flex items-center lg:w-[300px] 2xl:w-[544px] h-[35px] 2xl:h-[53px]  bg-white outline-none rounded-md border-b-[.1rem] border-black">
                <input
                 type="text"
                 className="outline-none font-normal pl-2 text-[1.3rem] w-full h-[35px] rounded-md"
                 placeholder="Search"
                 name="course_title"
                id = ""
              
                />
                <div className="absolute top-1 right-2">
                  <IoSearchSharp className="text-[1.5rem]" />
                </div>
              </div>
              </div>
              <div className="lg:max-w-[1000px] bg-[#BCE8B1] h-[2vh] items-center lg:rounded-lg">
                <div className="max-w-[30%] bg-[#126912] h-[2vh] lg:rounded-lg"></div>
              </div>
              <div className="w-[98%] font-medium text-[1.4rem] 2xl:text-[36px] m-auto pt-4 mb-5">
                <span className=" TeamB_text-shadow">Lessons</span>
              </div>
              <div className="flex items-center justify-center">
        
                <CourseOverviewById />
              </div>
            </div>

            {/* <div>
              <EditChapterTitle/>
            </div> */}
            {/*January 19 2024 -gem modify responsiveness*/}
            {/*January 17 2023 API connection from backend to front end displaying data */}
            {/*January 19 2024 -gem modify buttons add footer*/}

            <div>
              <footer className="flex justify-center pt-10">
                <div>
                  <p className="text-[#4D9349] font-medium">
                    All Rights Reserved | Copyright 2024
                  </p>
                </div>
              </footer>
            </div>
            {/*January 19 2024 -gem modify buttons add footer*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseOverviewCard;
// 1/19/2024

import React, { useState, useEffect } from "react";
import axios from "axios";

import { TfiSave } from "react-icons/tfi";

//import mockdata
import data from "../../mockData/CourseOverviewCard.json";

//edit icon
//edit icon
import { FaEdit } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

//back icon and back function
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import EditChapterTitle from "./EditChapterTitle";
import CourseOverviewById from "./CourseOverviewById";

const CourseOverviewCard = () => {
  /*January 17 2023 API connection from backend to front end displaying data */

  //mockdata chapter

  //back function
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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
 

  return (
    <>
      {/*January 19 2024 -gem modify responsiveness*/}

      <div className="relative m-auto h-full mt-[70px]  ">
        <div className="relative w-full h-full m-auto ">
          {/* <div
            className="absolute left-2 top-0 flex items-center cursor-pointer w-[10%]"
            onClick={goBack}>
            <span className="text-[2.5rem]">
              <IoArrowBackCircle />
            </span>
            <span className="text-[1rem] pl-1">Back</span>
          </div> */}
          <div className="w-[90%] mt-10 flex mx-auto flex-col lg:center-row lg:w-[70%] lg:m-auto  items-center gap-8">
            <div className="lg:font-bold py-1 lg:py-0 lg:text-[2rem] w-full flex justify-center items-center">
              <p className="lg:font-bold text-shadow">Course Overview</p>
            </div>
            <div className="w-full lg:max-w-[800px]">
              <div className="pb-2 w-full flex mx-auto flex-col lg:text-[1.5rem] lg:right-row lg:w-[98%] lg:m-auto  items-right">
                <p className="lg:font-bold text-shadow">HTML And CSS</p>
              </div>
              <div className="lg:max-w-[1000px] bg-[#BCE8B1] h-[2vh] items-center lg:rounded-lg">
                <div className="max-w-[30%] bg-[#126912] h-[2vh] lg:rounded-lg"></div>
              </div>
              <div className="w-[98%] font-medium text-[1.4rem] 2xl:text-[36px] m-auto pt-2">
                <span className=" text-shadow">Lessons</span>
              </div>
              <div>
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
              <footer className="flex justify-center p-10">
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

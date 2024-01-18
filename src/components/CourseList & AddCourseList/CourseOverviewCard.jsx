import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAdd } from "react-icons/io5";

//import mockdata
import data from "../../mockData/CourseOverviewCard.json";

const CourseOverviewCard = () => {
  /*January 17 2023 API connection from backend to front end displaying data */
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    loadChapters();
  }, []);

  const loadChapters = async () => {
    const result = await axios.get("http://localhost:8080/getChapter");
    setChapters(result.data);
  };
  //mockdata chapter
  const { chapterlist } = data;
  return (
    <>
      <div className="mt-5 w-full h-[100vh] ">
        <div className="w-[90%] mt-10 flex mx-auto flex-col lg:center-row lg:w-[70%] lg:m-auto lg:mt-5 items-center gap-5">
          <div className="lg:font-bold py-1 lg:py-0 lg:text-[2rem] w-full flex justify-center items-center">
            <p className="lg:font-bold">Course Overview</p>
          </div>
          <div className="w-[100%] mt-10 flex mx-auto flex-col lg:text-[1.5rem] lg:right-row lg:w-[98%] lg:m-auto lg:mt-5 items-right">
            <p className="lg:font-bold">HTML And CSS</p>
          </div>
            <div className="w-[69vw] bg-[#BCE8B1] h-[2vh] items-center lg:rounded-lg">
              <div className="w-[20vw] bg-[#126912] h-[2vh] lg:rounded-lg"></div>
            </div>
         
          {chapterlist.map((chapter, idx) => {
            return (
              
              <div key={idx} className="w-[80%] bg-[#126912] lg:rounded-lg py-1 text-center text-[.8rem] lg:text-[1rem] w-[30%] lg:w-[50%] lg:p-5 rounded-l-sm lg:rounded-l-md ">
                    <p className="lg:font-medium">{chapter.chapter_title}</p>
                  </div>
              
            );
          })}
          {/*January 17 2023 API connection from backend to front end displaying data */}
          <div className="lg:w-[20%] lg:flex lg:justify-center grid gap-2 grid-cols-2 ">
          <button className=" h-[10vh] m-10  flex items-center justify-center w-[100%] lg:w-[100%] cursor-pointer">
          
              <div className="bg-[#87D275] w-[30%]  flex items-center justify-center items-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
                <span>
                  <IoAdd className="text-[2rem] lg:text-[3rem] text-white" />
                </span>
              </div>
              <div className="bg-[#126912] text-white lg:font-bold h-[5vh] lg:h-[10vh] lg:w-[100vh] w-full flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
                <span className="text-[.8rem] lg:text-[1.3rem]">
                  Add Chapter Title
                </span>
              </div>
            
          </button>
          <div className="lg:flex lg:justify-space-between"></div>

          <button className=" h-[10vh] m-10  flex items-center justify-center w-[100%] lg:w-[100%] cursor-pointer">
          
          <div className="bg-[#87D275] w-[30%]  flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
            <span>
              <IoAdd className="text-[2rem] lg:text-[3rem] text-white" />
            </span>
          </div>
          <div className="bg-[#126912] text-white lg:font-bold h-[5vh] lg:h-[10vh] lg:w-[100vh] w-full flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
            <span className="text-[.8rem] lg:text-[1.3rem]">
              Edit Chapter Title
            </span>
          </div>
        
      </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default CourseOverviewCard;

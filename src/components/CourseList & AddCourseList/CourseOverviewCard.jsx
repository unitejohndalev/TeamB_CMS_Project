import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAdd } from "react-icons/io5";

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

  return (
    <>
      <div className="">
        <div className="">
          <div className="w-[90%] mt-10 flex mx-auto flex-col lg:center-row lg:w-[50%] lg:m-auto lg:mt-5 items-center gap-5">
            <div className="text-black lg:font-bold text-[.8rem] py-1 lg:py-0 lg:text-[1.2rem] w-full flex justify-center items-center">
              <p className="lg:font-bold">Chapter List</p>
            </div>
            {chapters.map((chapter, idx) => {
              return (
                <div key={idx} className="w-full rounded-md shadow-md">
                  <div className="flex px-0 py-0 rounded-md ">
                    <div className="bg-[#BCE8B1] py-1 justify-center text-center text-[.8rem] lg:text-[1rem] w-[30%] lg:w-[20%] lg:p-5 rounded-l-sm lg:rounded-l-md">
                      <p className="lg:font-medium">{chapter.chapter_id}</p>
                    </div>

                    <p
                      className="text-white lg:font-bold text-[.8rem] py-1 lg:py-0 lg:text-[1.2rem] w-full flex justify-center items-center
                   rounded-r-sm lg:rounded-r-md 	bg-[#126912] "
                    >
                      {chapter.chapter_title}
                    </p>
                  </div>
                </div>
              );
            })}
{/*January 17 2023 API connection from backend to front end displaying data */}
                
         
           
              <button>
                <div
                  className=" h-[10vh] mb-10  flex items-center justify-center w-[50%] lg:w-[50%] cursor-pointer"
                >
                  <div className="bg-[#87D275] w-[30%]  flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
                    <span>
                      <IoAdd className="text-[2rem] lg:text-[3rem] text-white" />
                    </span>
                  </div>
                  <div className="bg-[#126912] text-white lg:font-bold h-[5vh] lg:h-[10vh] lg:w-[100vh] w-full flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
                    <span className="text-[.8rem] lg:text-[1.3rem]">
                      Add Chapter
                    </span>
                  </div>
                </div>
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseOverviewCard;

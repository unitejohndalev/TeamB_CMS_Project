import React, { useContext } from "react";
import data from "../../mockData/MockData.json";
import Footer from "../Footer";
import DashboardCardHover from "./DashBoardCardHover";
import { DashBoardContext } from "../context/DashBoardContext";

const DashboardCard = () => {
  const { courses } = data;
  const { dashBoardHover, setDashBoardHover } = useContext(DashBoardContext);

  return (
    <div className="w-full relative">
      <div className="h-[40vh] xl:h-[486px] relative flex flex-col items-center justify-center py-10 bg-cover shadow-lg" style={{ backgroundImage: "url('https://img.freepik.com/fotos-premium/acuarela-abstracta-verde-textura-papel-blanco_7190-1311.jpg?w=996')" }}>
        <p className="mt-8 sm:mt-16 TeamB_text-shadow text-sm sm:text-[1.8rem] lg:text-[2rem] xl:text-[3.5rem] 2xl:text-[64px] font-bold text-white sm:w-3/4 lg:w-[80%] text-center">
          月伝で自分のやり方を学びましょう。
        </p>
        <p className="TeamB_text-shadow xl:text-[3rem] 2xl:text-[64px] italic lg:text-[1.7rem] font-bold text-[#67836B] pb-4 sm:pb-10 lg:pb-15 text-center">
          Learn your way at Tsukiden.
        </p>
      </div>
      <div className="xl:h-[330px] 2xl:w-[1519px] flex flex-col lg:flex-row lg:w-[90vw] lg:m-auto lg:justify-center lg:mt-10 items-center gap-5 mt-2">
        {courses.slice(0, 3).map((course, idx) => (
          <div key={idx} className="w-[95%] lg:max-w-[270px] h-[220px] xl:w-[30%] xl:h-[330px] 2xl:w-[271px] shadow-sm rounded-[2rem] bg-[#BCE8B1]">
            <div className="p-4 lg:p-5 2xl:px-2 lg:h-[35%] flex flex-col rounded-t-[2rem] justify-center">
              <p className="TeamB_text-shadow text-sm sm:text-[#278510]">{course.courseNum}:</p>
              <p className="TeamB_text-shadow text-sm sm:text-[#278510] font-bold line-clamp-1 xl:text-[1.1rem]">{course.courseTitle}</p>
            </div>
            <div className="relative h-[70%] bg-[#87D275] rounded-b-[2rem] rounded-t-[1rem] text-center text-justify">
              <div className="flex flex-col justify-between h-[90%]">
                <p className="p-4 line-clamp-3 lg:line-clamp-4 xl:line-clamp-6 text-sm sm:text-base mb-4 lg:h-[80%]">{course.description}</p>
                <button className="absolute bottom-4 left-12 transform -translate-x-1/2 font-bold text-sm sm:text-base text-[#1E6C0B] TeamB_text-shadow" onClick={() => setDashBoardHover(prev => !prev)}>
                  See more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 sm:mt-10">
        <Footer />
      </div>
      <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {dashBoardHover && <DashboardCardHover />}
      </div>
    </div>
  );
};

export default DashboardCard;

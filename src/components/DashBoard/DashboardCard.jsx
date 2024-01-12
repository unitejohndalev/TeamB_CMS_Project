import React, { useState } from "react";

//import mock data json file
import data from "../../mockData/MockData.json";

const DashboardCard = () => {
  // *NOTE
  //if data is coming from db use useState hook to store the data
  //sample: const [courses, setCourses] = useState([])

  //*NOTE
  //use GET function of axios and use useEffect hook
  /*sample: useEffect(() => {
  loadCourses();

  }, []);
  
    const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/courses");
    setCourses(result.data);
    }
    */

  //after getting the data display it using map
  //get your react hook where you store the data coming from db
  //sample: courses.map((course, idx) {return(your code here)});

  //*NOTE
  //for now I'll be displaying a data coming from a json format file
  //destructure the data
  const { courses } = data;
  return (
    <div className="w-full h-full">
      {/* change bg color to provided img */}
      <div className="flex flex-col items-center justify-center w-full py-10 mt-3 bg-green-400 shadow-lg lg:py-15">
        <p className="text-[1.5rem] font-bold text-white w-[80%] text-center mb-2">
          月伝で自分のやり方を学びましょう。
        </p>
        <p className="italic text-[1.5rem] font-bold text-[#67836B] text-opacity-[25%] pb-10 lg:pb-20">
          Learn your way at Tsukiden.
        </p>
        <button className="px-5 font-normal btn-style jus">View Courses</button>
      </div>
      <div className="flex flex-col lg:flex-row lg:w-[90%] lg:m-auto lg:mt-5 items-center gap-5 mt-2 ">
        {courses.map((course, idx) => {
          return (
            // 1/11/2024
            <div key={idx} className="w-[95%] shadow-md rounded-sm ">
              <div className="bg-[#BCE8B1] flex flex-col py-10 px-5 rounded-t-sm">
                <p className="text-[#278510]">{course.courseNum}:</p>
                <p className="text-[#278510] font-bold text-[1.2rem] lg:h-[8vh]">
                  {course.courseTitle}
                </p>
              </div>
              <div className="bg-[#87D275] p-5 rounded-b-sm text-justify">
                <p className="">{course.description}</p>
                <button className="text-[#1E6C0B] pt-3 font-bold">
                  See more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardCard;

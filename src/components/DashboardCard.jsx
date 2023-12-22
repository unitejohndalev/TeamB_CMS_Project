import React, { useState } from "react";

//import mock data json file
import data from "../mockData/MockData.json";

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
    <div className="w-full h-full mt-[80px]">
      {/* change bg color to provided img */}
      <div className="shadow-lg w-full bg-green-400 flex flex-col justify-center items-center">
        <p className="text-[1.5rem] font-bold text-white">
          月伝で自分のやり方を学びましょう。
        </p>
        <p className="italic text-[1.5rem] font-bold text-[#67836B] text-opacity-[25%]">
          Learn your way at Tsukiden.
        </p>
        <button className="btn-style mt-10 mb-5 px-5 font-normal">
          View Courses
        </button>
      </div>
      <div className="bg-white flex flex-col items-center mt-10 gap-5">
        {courses.map((course, idx) => {
          return (
            <div key={idx} className="w-[90%] shadow-md rounded-sm">
              <div className="bg-[#BCE8B1] flex flex-col py-10 px-5">
                <p className="text-[#278510]">{course.courseNum}:</p>
                <p className="text-[#278510] font-bold text-[1.2rem]">
                  {course.courseTitle}
                </p>
              </div>
              <div className="bg-[#87D275] p-5">
                <p>{course.description}</p>
                <button>See more</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardCard;

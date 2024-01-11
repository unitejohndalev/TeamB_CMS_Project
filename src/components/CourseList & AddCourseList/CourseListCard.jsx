/*January 10, 2024*/
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

//import mock data json file
import data from "../../mockData/CourselistCard.json";

const CourseListCard = () => {
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
  const { courselist } = data;
  return (
    <>
      <div>
        <div className="flex flex-col lg:center-row lg:w-[90%] lg:m-auto lg:mt-5 items-center gap-5 mt-2 bg-white">
          {courselist.map((course, idx) => {
            return (
              <div key={idx} className="w-full  shadow-md rounded-sm ">
                <div className="bg-[#BCE8B1] flex  py-0 px-0 rounded-t-sm ">
                  <div className="bg-[#87D275] p-10 rounded-b-sm text-justify">
                    <p className="">{course.description}</p>
                  </div>

                  <p className="text-[#278510] font-bold text-[1.2rem] lg:h-[8vh] self-center mx-10 	background-color: rgb(188 232 177); ">
                    {course.courseTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:w-[100%]">
        <div type="add" className=" mb-10 lg:max-w-[30%] flex items-center justify-center  h-full size-full">
          <div className="bg-[#87D275] w-[20%] h-[100%] flex items-center justify-center">
              <span>
                <IoAdd className="text-[2rem] text-white" />
              </span>
          </div>
            <div className="bg-[#BCE8B1] size-full">
            <span className="text-[1.3rem]">Add New Course</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default CourseListCard;
/*January 10, 2024*/

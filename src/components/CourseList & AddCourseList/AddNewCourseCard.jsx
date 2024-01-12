import React from "react";
import { IoAdd } from "react-icons/io5";

const AddNewCourseCard = () => {
  return (
    <div>
      <div className="mt-5 ">
        <p>Add Course Title</p>
        <div></div>
        <div className="flex flex-col items-center justify-center w-[90%] lg:w-[50%] m-auto gap-5">
          <textarea
            name=""
            id=""
            className="resize-none bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center opacity-[50%] w-full"
            placeholder="Add new brief description"
          />
          <input
            type="text"
            className="bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center opacity-[50%] w-full"
            placeholder="Add Chapter Title"
          />
          <input
            type="text"
            className="bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center opacity-[50%] w-full"
            placeholder="Add Chapter Title"
          />
          <input
            type="text"
            className="bg-[#BCE8B1] placeholder:text-[#070101] placeholder:text-center opacity-[50%] w-full"
            placeholder="Add Chapter Title"
          />
        <div
          type="add"
          className=" h-[10vh] mb-10  flex items-center justify-center w-[60%] lg:w-[50%] cursor-pointer">
          <div className="bg-[#126912] w-[30%]  flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
            <span>
              <IoAdd className="text-[2rem] lg:text-[3rem] text-white" />
            </span>
          </div>
          <div className=" bg-[#BCE8B1] text-white lg:font-bold h-[5vh] lg:h-[10vh] w-full flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
            <span className="text-[.8rem] lg:text-[1.3rem] text-[#070101] opacity-[55%]">
              Add New Chapter Title
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCourseCard;

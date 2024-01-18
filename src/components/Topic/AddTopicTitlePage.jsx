import React from "react";
import { useNavigate } from "react-router-dom";

//arrow back icon
import { IoArrowBackCircle } from "react-icons/io5";

//add icon
import { IoIosAddCircle } from "react-icons/io";

//save icon
import { TfiSave } from "react-icons/tfi";

const AddTopicTitlePage = () => {
  //use navigate to back
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex h-[100vh]">
        {/* sidebar */}
        <div className="h-full flex flex-col items-center lg:w-[250px] 2xl:w-[375px] bg-[#126912]">
          <div
            className="flex items-center mt-3 cursor-pointer "
            onClick={goBack}>
            <span className="text-[2.5rem] text-white">
              <IoArrowBackCircle />
            </span>
            <span className="text-[1rem] pl-1 text-white">Back</span>
          </div>
          <div className="hidden lg:flex lg:border-b lg:border-white w-[90%] "></div>
          <div>
            <p className="text-white w-[3vw] text-center py-5">HTML & CSS</p>
          </div>
          <div>
            <p className="text-white">Topic 1: Title</p>
          </div>
          <div>
            <p className="text-white">Topic 2: Title</p>
          </div>
          <div>
            <p className="text-white">Topic 3: Title</p>
          </div>
          <div className="flex items-center justify-center py-10">
            <div className="text-white text-[2rem]">
              <IoIosAddCircle />
            </div>
            <span className="text-white">Add New Topic</span>
          </div>
        </div>
        {/* add topic title */}
        <div className="w-full mt-2">
          <div className="flex items-center justify-end w-full ">
            <div className="flex items-center gap-2 pr-5">
              <div className="text-[#126912] text-[1.5rem]">
                <TfiSave />
              </div>
              <span className="text-[#126912] font-semibold">Save</span>
            </div>
          </div>
          <div>
            <span className="lg:text-[2rem] xl:text-[48px] font-semibold">
              Course Title
            </span>
            <div className="flex items-center ">
              <span className="lg:text-[1.5rem] xl:text-[36px] ">
                Chapter Title:
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Add Topic Title"
                className="bg-[#BCE8B1] rounded-lg placeholder:text-[#626262] placeholder:pl-2 outline-none pl-2"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Add Topic Description"
            />
          </div>
          <div>
            <span>vid link</span>
            <span>file link</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTopicTitlePage;

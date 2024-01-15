import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";

const CourseOverviewCard = () => {
  // State to keep track of the topics
  const [topics, setTopics] = useState([
    { id: 1, title: "CHAPTER 2: TITLE OF THE CHAPTER" }
  ]);

  // Function to handle adding a new topic
  const handleAddTopic = () => {
    const newTopic = {
      id: topics.length + 1,
      title: "New Chapter Title"
    };
    setTopics([...topics, newTopic]);
  };

  // Function to handle editing a chapter title
  const handleEditTitle = (id, newTitle) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === id ? { ...topic, title: newTitle } : topic
      )
    );
  };
// 1/15/2024 Functions, Buttons, and Routes
  return (
    <div>
      <div className="mt-5">
        <p>Add Course Title</p>
        <div></div>
        <div className="flex flex-col items-center justify-center w-[90%] lg:w-[50%] m-auto gap-5">
          {topics.map((topic) => (
            <div key={topic.id} className="flex items-center w-full">
              <div className="w-[.5rem] h-[.5rem] rounded-[50%] bg-[#126912]"></div>
              <input
                type="text"
                value={topic.title}
                onChange={(e) => handleEditTitle(topic.id, e.target.value)}
                className="bg-[#126912] text-white outline-none border-none px-2 w-full"
              />
            </div>
          ))}
          <div
            onClick={handleAddTopic}
            className="h-[10vh] mb-10 flex items-center justify-center w-[60%] lg:w-[50%] cursor-pointer"
          >
            
            
            <div className="bg-[#126912] w-[30%] flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
            </div>
            <div className="bg-[#BCE8B1] text-white lg:font-bold h-[5vh] lg:h-[10vh] w-full pr-40 flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
            <span>
                <FaRegEdit className="text-[2rem] lg:text-[1.5rem] text-white" />
              </span>
              <span className=" text-[.8rem] lg:text-[.80rem] text-[#070101] opacity-[55%] text-center w-80  ">
                Edit Chapter
              </span>
            </div>

            <div className="bg-[#126912] w-[30%] flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
            </div>
            <div className="bg-[#BCE8B1] text-white lg:font-bold h-[5vh] w-80 lg:h-[10vh] w-full pr-40 flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
            <span>
                <IoAdd className="text-[2rem] lg:text-[1.5rem] text-white" />
              </span>
             
              <span className="text-[.8rem] lg:text-[.76rem] text-[#070101] opacity-[55%] text-center w-80">
                Add New Chapter Title
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewCard;

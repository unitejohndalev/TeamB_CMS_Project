import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

const CourseOverviewCard = () => {

  
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

  const [topics, setTopics] = useState([
    { id: 1, title: "CHAPTER 1: TITLE OF THE CHAPTER" },
  ]);

  const [editMode, setEditMode] = useState(false);

  const handleAddTopic = () => {
    if (!editMode) {
      const newTopic = {
        id: topics.length + 1,
        title: "New Chapter Title",
      };
      setTopics([...topics, newTopic]);
    }
  };

  const handleEditTitle = (id, newTitle) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === id ? { ...topic, title: newTitle } : topic
      )
    );
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center justify-center w-[90%] lg:w-[50%] m-auto gap-5 relative">
        {/* Use Link to navigate back */}
        <Link to="/AddNewCourseCard">
          <button className="fixed top-16 left-0 mt-4 ml-4 cursor-pointer bg-[#87D275] text-white rounded-md px-4 py-2 z-10">
            Back
          </button>
        </Link>

        {topics.map((topic) => (
          <div key={topic.id} className={`flex items-center w-full space-x-3 lg:h- ${editMode && "opacity-50"}`}>
            <div className="w-[1rem] h-[1rem] rounded-[50%] bg-[#126912]"></div>
            <input
              type="text"
              value={topic.title}
              onChange={(e) => (editMode ? handleEditTitle(topic.id, e.target.value) : null)}
              readOnly={!editMode}
              className={`bg-[#126912] text-white outline-none p-2 border-none rounded-lg px-2 w-full ${
                editMode ? "cursor-text" : "cursor-not-allowed"
              }`}
            />
          </div>
        ))}

        <div className="flex items-center justify-center space-x-3 mt-3">
          <button
            onClick={toggleEditMode}
            className="flex items-center cursor-pointer bg-[#87D275] text-white rounded-md px-7 py-2">
            <FaRegEdit className="m-1 text-[1.5rem]" />
            <span className="text-base">{editMode ? "Stop Editing" : "Edit Title"}</span>
          </button>

          <button
            onClick={handleAddTopic}
            className={`flex items-center cursor-pointer bg-[#87D275] text-white rounded-md px-4 py-2 ${editMode && "opacity-50"}`}>
            <IoAdd className="m-1 text-[1.5rem]" />
            <span className="text-base">{editMode ? "Cannot Add in Edit Mode" : "Add Course"}</span>
          </button>

        </div>
      </div>
    </>
  );
};

export default CourseOverviewCard;

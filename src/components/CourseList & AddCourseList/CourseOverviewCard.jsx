import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

const CourseOverviewCard = () => {
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
    </div>
  );
};

export default CourseOverviewCard;

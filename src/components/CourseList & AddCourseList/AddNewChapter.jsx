import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";

const AddNewChapter = () => {

  // State to keep track of the topics
  const [chapters, setChapters] = useState([]);
  
  const [chapter, setChapter] = useState({
    chapter_title: '',
    chapter_date_created: '',
  });

  useEffect(() => {
    loadChapters();
  },[]);
  
  const loadChapters = async () => {
    const result = await axios.get("http://localhost:8080/getChapter");
    setChapters(result.data);
  };
  // State to track whether titles are in edit mode
  const [editMode, setEditMode] = useState(false);

  // Function to handle adding a new topic or chapter
  const handleAddChapter = () => {
    if (!editMode) {
      const newChapter = {
        id: chapters.length + 1,
        title: "New Chapter Title",
      };
      setChapters([...chapters, newChapter]);
    }
  };
  const handleInputChange = (e) => {
    setChapter({ ...chapter, [e.target.name]: e.target.value });
  };
  // Function to handle editing a chapter title
  const handleEditTitle = (chapter_id, newChapter_Title) => {
    setChapters((prevChapters) =>
      prevChapters.map((chapter) =>
        chapter.chapter_id === chapter_id ? { ...chapter, chapter_title: newChapter_Title } : chapter
      )
    );
  };

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Function to handle the back button click
  const handleBackButtonClick = () => {
    // Add your logic for navigating back
    console.log("Back button clicked!");
  };
  
  //destructor for instructor
  const { title, date } = chapter;

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center justify-center w-[90%] lg:w-[50%] m-auto gap-5 relative">
        {/* Back Button below the navigation bar */}
        <button
          onClick={handleBackButtonClick}
          className="fixed top-16 left-0 mt-4 ml-4 cursor-pointer bg-[#87D275] text-white rounded-md px-4 py-2 z-10">
          Back
        </button>

        {chapters.map((chapter) => (
          <div key={chapter.chapter_id} className={`flex items-center w-full space-x-3 lg:h- ${editMode && "opacity-50"}`}>
            <div className="w-[1rem] h-[1rem] rounded-[50%] bg-[#126912]"></div>
            <input
              type="text"
              value={title}
              onChange={(e) => (editMode ? handleEditTitle(chapter.chapter_id, e.target.value) : null)}
              readOnly={!editMode}
              className={`bg-[#126912] text-white outline-none p-2 border-none rounded-lg px-2 w-full ${
                editMode ? "cursor-text" : "cursor-not-allowed"
              }`}
            />
          </div>
        ))}

        <div className="flex items-center justify-center space-x-3 mt-3">
          {/* Button 1 */}
          <button
            onClick={toggleEditMode}
            className="flex items-center cursor-pointer bg-[#87D275] text-white rounded-md px-7 py-2">
            <FaRegEdit className="m-1 text-[1.5rem]" />
            <span className="text-base">{editMode ? "Save" : "Edit Title"}</span>
          </button>

          {/* Button 2 */}
          <button
            onClick={handleAddChapter}
            className={`flex items-center cursor-pointer bg-[#87D275] text-white rounded-md px-4 py-2 ${editMode && "opacity-50"}`}>
            <IoAdd className="m-1 text-[1.5rem]" />
            <span className="text-base">{editMode ? "Cannot Add in Edit Mode" : "Add Chapter"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewChapter;

import React, { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Footer from "../Footer";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";
import { FaSave } from "react-icons/fa";
import { AiOutlineFileText } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CourseDescription = () => {
  const navigate = useNavigate();

  const [videoInputValue, setVideoInputValue] = useState("");
  const [quizInputValue, setQuizInputValue] = useState("");
  const [isVideoPopupOpen, setVideoPopupOpen] = useState(false);
  const [isQuizPopupOpen, setQuizPopupOpen] = useState(false);
  const [isEditMode, setEditMode] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(null);

  const toggleVideoPopup = () => {
    setVideoPopupOpen(!isVideoPopupOpen);
  };

  const toggleQuizPopup = () => {
    setQuizPopupOpen(!isQuizPopupOpen);
  };

  const handleVideoInputChange = (e) => {
    setVideoInputValue(e.target.value);
  };

  const handleQuizInputChange = (e) => {
    setQuizInputValue(e.target.value);
  };

  const handleDoneClick = (type) => {
    if (type === "video") {
      console.log("Video Done button clicked. Input value:", videoInputValue);
      setVideoPopupOpen(false);
    } else if (type === "quiz") {
      console.log("Quiz Done button clicked. Input value:", quizInputValue);
      setQuizPopupOpen(false);
    }

    setEditMode(false);
  };

  const handleCancelClick = (type) => {
    if (type === "video") {
      setVideoInputValue("");
      console.log("Video Cancel button clicked");
      setVideoPopupOpen(false);
    } else if (type === "quiz") {
      setQuizInputValue("");
      console.log("Quiz Cancel button clicked");
      setQuizPopupOpen(false);
    }

    setEditMode(false);
  };

  const handleQuizClick = () => {
    setEditMode(true);
  };

  const handleDeleteTopic = (index) => {
    setSelectedTopicIndex(index);
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
    setSelectedTopicIndex(null);
  };

  const handleConfirmDelete = () => {
    // Implement the logic to delete the topic at the specified index
    console.log(`Deleting Topic ${selectedTopicIndex}`);
    setShowDeleteConfirmation(false);
    setSelectedTopicIndex(null);
  };

  const handleDescriptionClick = () => {
    // Use navigate instead of history.push
    navigate("/course-description");
  };

  return (
    <>
      <div className="flex mt-[100px] lg:h-[100vh] 2xl:h-[1011px] ">
        {/* sidebar */}
        <div className="h-full flex flex-col items-start lg:w-[250px] 2xl:w-[375px] bg-[#126912]">
          {/* Description section */}
          <div
            className="flex items-start mt-3 cursor-pointer"
            onClick={handleDescriptionClick}
          >
            <span className="text-[2rem] mb-2 ml-1 text-white">
              <IoArrowBackCircle />
            </span>
            <span className="text-[1rem] items-start pl-1 text-white"></span>
          </div>
          <div className="hidden lg:flex lg:border-b lg:border-white w-[90%] "></div>
          <div className="pt-10">
            <div className="flex items-center justify-between">
              <button
                className="text-white text-[1rem] ml-2 pr-2 pb-2"
                onClick={handleDescriptionClick}
              >
                Description
              </button>
              {/* Removed the delete icon beside the Description */}
            </div>
            {[1, 2, 3].map((index) => (
              <div key={index} className="ml-2 flex items-center justify-between">
                <p className="py-2 text-white">Topic {index}: Title</p>
                <div
                  className="cursor-pointer ml-10"
                  onClick={() => handleDeleteTopic(index)}
                >
                  <MdDelete size={20} color="#FFFFFF" />
                </div>
              </div>
            ))}
          </div>
          <div className="flex ml-1 items-center justify-center mt-5 cursor-pointer">
            <div className="text-white text-[2rem] pr-2">
              <IoIosAddCircle />
            </div>
            <span className="text-white ml">Add New Topic</span>
          </div>
        </div>
        {/* add topic title */}
        <div className="h-[100vh] w-full pt-2">
          <div className="flex items-center justify-end w-full ">
            {/* Save icon is now here */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleQuizClick}
            >
              <FaSave size={20} color="#126912" />
              <span className="text-[#126912] font-semibold ml">Save</span>
            </div>
          </div>
          <div className="w-[90%] m-auto">
            <span className="lg:text-[2rem] 2xl:text-[48px] font-semibold ">
              Course Title
            </span>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Lorem ipsum dolor..."
              value={isEditMode ? quizInputValue : "Lorem ipsum dolor sit amet..."}
              readOnly={!isEditMode}
              className="bg-[#BCE8B1] lg:h-[60vh] lg:min-w-[100%] 2xl:h-[264px] lg:h-[25vh] placeholder:font-medium placeholder:text-center placeholder:p-6
              outline-none rounded-lg placeholder:text-[#070101] placeholder:text-opacity-[55%] mt-5 pl-5"
              onChange={handleQuizInputChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
      {showDeleteConfirmation && (
        <DeleteConfirmationDialog
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
};

export default CourseDescription;

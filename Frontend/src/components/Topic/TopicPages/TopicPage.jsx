import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import DeleteTopicModal from "../TopicModal/DeleteTopicModal";
import AddTopic from "./AddTopic";
import EditTopic from "./EditTopic";
import CourseDescription from "./CourseDescription";

const TopicPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [showCourseDescription, setShowCourseDescription] = useState(true);
  const [showAddTopic, setShowAddTopic] = useState(false);
  const [showEditTopic, setShowEditTopic] = useState(false);

  const showDescriptionHandle = () => {
    setShowCourseDescription(true);
    setShowAddTopic(false);
    setShowEditTopic(false);
  };

  const showAddHandle = () => {
    setShowAddTopic(true);
    setShowCourseDescription(false);
    setShowEditTopic(false);
  };

  const showEditHandle = () => {
    setShowEditTopic(true);
    setShowCourseDescription(false);
    setShowAddTopic(false);
  };

  return (
    <>
      <div className="flex mt-[80px] lg:h-[100vh] 2xl:h-[1011px]">
        {/* sidebar */}
        <div className="h-full flex flex-col items-center lg:w-[250px] xl:w-[300px] bg-[#126912]">
          <div
            className="flex justify-start pt-3 pb-8 cursor-pointer w-[90%]"
            onClick={goBack}
          >
            <span className="text-[2.1rem] text-white">
              <IoArrowBackCircle />
            </span>
          </div>
          <div className="hidden lg:flex lg:border-b lg:border-white w-[90%] "></div>

          <div className="h-[70%] w-[80%] ">
            <div>
              <p
                className="cursor-pointer font-light pb-3 text-white TeamB_text-shadow text-[1.3rem] lg:text-xl"
                onClick={showDescriptionHandle}
              >
                Description
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p
                className="cursor-pointer py-2 font-light text-white TeamB_text-shadow text-[1.2rem] lg:text-lg"
                onClick={showEditHandle}
              >
                Topic 1: Title
              </p>
              <span
                className="text-lg text-white cursor-pointer"
                onClick={() => setDeleteModalVisible((prev) => !prev)}
              >
                <MdDelete />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p
                className="py-2 cursor-pointer font-light text-white TeamB_text-shadow text-[1.2rem] lg:text-lg"
                onClick={showEditHandle}
              >
                Topic 2: Title
              </p>
              <span
                className="text-lg text-white cursor-pointer"
                onClick={() => setDeleteModalVisible((prev) => !prev)}
              >
                <MdDelete />
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p
                className=" cursor-pointer py-2 font-light text-white TeamB_text-shadow text-[1.2rem] lg:text-lg"
                onClick={showEditHandle}
              >
                Topic 3: Title
              </p>
              <span
                className="text-lg text-white cursor-pointer"
                onClick={() => setDeleteModalVisible((prev) => !prev)}
              >
                <MdDelete />
              </span>
            </div>
            <div
              className="flex items-center h-[30%] mt-20 "
              onClick={showAddHandle}
            >
              <div className="text-white text-[2.5rem] pr-2 cursor-pointer">
                <IoIosAddCircle />
              </div>
              <span className="font-medium text-white cursor-pointer text-[1rem] lg:text-lg">
                Add New Topic
              </span>
            </div>
          </div>
        </div>

        {/* Delete Modal Section */}

        {deleteModalVisible && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="lg:w-full">
              <DeleteTopicModal />
            </div>
          </div>
        )}
        {showCourseDescription && <CourseDescription />}
        {showAddTopic && <AddTopic />}
        {showEditTopic && <EditTopic />}
      </div>
    </>
  );
};

export default TopicPage;

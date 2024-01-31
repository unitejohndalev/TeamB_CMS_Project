import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { IoAdd } from "react-icons/io5";
//edit icon
import { FaEdit } from "react-icons/fa";
//delete icon
import { RiDeleteBinLine } from "react-icons/ri";
import EditChapterTitle from "./EditChapterTitle";
import { CourseContext } from "../context/CourseContext";

const CourseOverviewById = () => {
  const { courses, setCourses } = useContext(CourseContext);

  //user params to navigate specific id
  let { id } = useParams();

  useEffect(() => {
    loadChapters();
  }, [id]);

  const loadChapters = async () => {
    try {

      const result = await axios.get(
        `http://localhost:8080/api/courses/byChapter/${id}`
      );


      // Ensure that result.data is always an array by converting it
      const coursesArray = Array.isArray(result.data)
        ? result.data
        : [result.data];
      setCourses(coursesArray);
    } catch (error) {
      console.error("Error loading chapters:", error);
    }
  };
  // console.log(courses);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedChapterId, setSelectedChapterId] = useState(null);

  const handleEditClick = (chapterId) => {
    setSelectedChapterId(chapterId);
    setEditModalVisible(true);
  };

  return (
    <div className="relative h-full">
      <div className="h-[50vh] lg:max-w-[1080px] lg:flex lg:justify-center">

        {courses.map((chapter, idx) => {
          console.log(chapter.chapter.chapter_title);
          return (
            <div key={idx} className="lg:w-full">
              <div className="w-full m-auto mt-5">
                <div className="flex">
                  <div

                    className=" 2xl:rounded-[20px] lg:flex lg:items-center lg:font-medium lg:text-[1rem] 2xl:text-[24px] w-[90%] bg-[#126912]  py-1 text-center text-[.8rem]  lg:p-5 text-white
              lg:h-[50px] lg:rounded-[1rem]"
                  >
                    <p className="text-shadow">CHAPTER {chapter.chapter.chapter_id}:</p>
                    <p className="pl-2 lg:font-medium text-shadow">{chapter.chapter.chapter_title}</p>

                  </div>
                </div>
                {/* <Link className="flex ml-auto"> */}
                  <div
                    onClick={() => handleEditClick(chapter.chapter_id)}
                    className="flex items-center gap-2 pr-5 cursor-pointer"
                  >
                    <div className="text-[#4c604c] text-[1.5rem]">
                      <FaEdit />

                    key={idx}
                    className="flex 2xl:w-[1186px] 2xl:h-[65px] lg:w-[85%] justify-between items-center">
                    <div className="h-[1.5rem] w-[1.5rem] bg-[#126912] rounded-[100%]"></div>
                    <div
                      className=" 2xl:rounded-[20px] lg:flex lg:items-center lg:font-medium lg:text-[1rem] 2xl:text-[24px] w-[90%] bg-[#126912]  py-1 text-center text-[.8rem]  lg:p-5 text-white
              lg:h-[50px] lg:rounded-[1rem]">
                      <p className="text-shadow">
                        CHAPTER {chapter.chapter.chapter_id}:
                      </p>
                      <p className="pl-2 lg:font-medium text-shadow">
                        {chapter.chapter.chapter_title}
                      </p>

                    </div>
                  </div>
                  <Link className="flex ml-auto">
                    <div
                      onClick={() =>
                        handleEditClick(chapter.chapter.chapter_id)
                      }
                      className="flex items-center gap-2 pr-5 cursor-pointer">
                      <div className="text-[#000] text-[2rem]">
                        <FaEdit />
                      </div>

                      <div className="text-[#000] text-[2rem]">
                        <RiDeleteBinLine />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}{" "}
        {editModalVisible && (
          <EditChapterTitle
            chapterId={selectedChapterId}
            onClose={() => setEditModalVisible(false)}
            onSaved={() => setEditModalVisible(false)}
          />
        )}
      </div>
      <div className="absolute w-full ">
        <div className="gap-5 lg:w-[20rem] m-auto lg:flex lg:justify-center lg:items-center ">
          <Link
            to={`/createnewchaptertitle/${courses.course_id}`}
            className="lg:rounded-[1rem] h-[5vh] lg:h-[50px] 2xl:h-[65px] flex items-center justify-center w-[100%] lg:w-[100%] cursor-pointer bg-[#BCE8B1]">
            <div className="flex items-center justify-center w-full">
              <span className="pr-4">
                <IoAdd className="text-[2rem] lg:text-[2.5rem] text-white" />
              </span>
              <span className="text-shadow lg:text-[1rem] lg:font-bold 2xl:text-[24px]  text-[#070101] text-opacity-[55%]">
                Add Chapter Title
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewById;

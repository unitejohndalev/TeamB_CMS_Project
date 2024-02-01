import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { IoAdd } from "react-icons/io5";
import ChapterModal from "../Chapter Modal/ChapterModal";
//edit icon
import { FaEdit } from "react-icons/fa";
//delete icon
import { RiDeleteBinLine } from "react-icons/ri";
import EditChapterTitle from "./EditChapterTitle";
import { CourseContext } from "../context/CourseContext";
import { ChapterContext } from "../context/ChapterContext";

import data from "../../mockData/CourseOverviewCard.json";

const CourseOverviewById = () => {
  // const { courses, setCourses } = useContext(CourseContext);
  // const [chapters, setChapters]=useState([]);

  const { showCreateChapter, setShowCreateChapter } = useContext(ChapterContext);


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
  console.log(data);
  //mockdata chapter destructure
  const { chapterlist } = data;
  
  const [createChapTitle, setcreateChapTitle] = useState(null);

  
  return (
    <div className=" h-full w-full">
      <div className=" m-0 lg:max-w-[1080px] lg:flex lg:flex-col  lg:justify-center">
        {chapterlist.map((chapter, idx) => {
          // console.log(chapter.chapter.chapter_title);
          return (
            <div key={idx} className=" lg:w-full m-0 relative">
              <div className="flex justify-center items-center w-full m-auto gap-5 mb-5">
                <div className="h-[1.5rem] w-[1.5rem] bg-[#126912] rounded-[100%]"></div>
                {/* <div className="flex"> */}

                <div
                  className=" 2xl:rounded-[20px] w-full lg:flex lg:items-center lg:font-medium lg:text-[1rem] 2xl:text-[24px] bg-[#126912]  py-1 text-center text-[.8rem]  lg:p-5 text-white
              lg:h-[50px] lg:rounded-[1rem]  "
                >
                  <p className="text-shadow">CHAPTER {chapter.chapiId}:</p>
                  <p className="pl-2 lg:font-medium text-shadow">
                    {chapter.chapterTitle}
                  </p>

                  {/* 
                  </div> */}

                  {/* <Link className="flex ml-auto"> */}
                  <div
                    onClick={() => handleEditClick(chapter.chapiId)}
                    className="flex items-end gap-2 pr-5 cursor-pointer"
                  >
                    {/* <div className="text-[#4c604c] text-[1.5rem]"> */}
                    {/* <FaEdit /> */}

                    {/* <div key={idx}
                    className="flex 2xl:w-[1186px] 2xl:h-[65px] lg:w-[85%] justify-between items-center"></div>
                  
                    <div
                      className=" 2xl:rounded-[20px] lg:flex lg:items-center lg:font-medium lg:text-[1rem] 2xl:text-[24px] w-[90%] bg-[#126912]  py-1 text-center text-[.8rem]  lg:p-5 text-white
              lg:h-[50px] lg:rounded-[1rem]">
                      <p className="text-shadow">
                        CHAPTER {chapter.chapiId}:
                      </p>
                      <p className="pl-2 lg:font-medium text-shadow">
                        {chapter.chapterTitle}
                      </p>

                    </div> */}
                    {/* </div> */}

                    
                  </div>
                  <Link className="flex absolute right-2 ">
                      <div
                        onClick={() => handleEditClick(chapter.chapId)}
                        className="flex items-center gap-2 pl-2- cursor-pointer "
                      >
                        <div className="text-[1.3rem] 2xl:text-[2rem]  text-white" >
                          <FaEdit />
                        </div>

                        <div className="text-[1.3rem] 2xl:text-[2rem]  text-white" >
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
      <div className="w-full lg:w-[20rem] m-auto lg:flex lg:justify-center lg:items-center">
        <div className="gap-5 lg:w-[20rem] m-auto lg:flex lg:justify-center lg:items-center m-8">
          <Link
            // to={`/createnewchaptertitle/${courses.course_id}`}
            to={"/createnewchaptertitle"}
            className="lg:rounded-[1rem] h-[5vh] lg:h-[50px] 2xl:h-[65px] flex items-center justify-center w-[100%] lg:w-[100%] cursor-pointer bg-[#BCE8B1]"
          >
            
          </Link>
            <div className="flex items-center justify-center w-full">
              <span 
                onClick={() => {
                          setShowEditTitle((prev) => !prev);
                }}
                className="pr-2">
                <IoAdd className="text-[2rem] lg:text-[2.5rem] text-white" />
              </span>
              <span className="text-shadow lg:text-[1rem] lg:font-bold 2xl:text-[24px]  text-[#070101] text-opacity-[55%]">
                Add Chapter Title
              </span>
              {showcreateTitle == course.id && (
                        <div className="absolute z-10">
                          <div className="lg:w-[1080px] ">
                            <CourseTitleModal
                              courseId={editCourseId}
                              courseTitle={course.courseTitle}
                            />
                          </div>
                        </div>
                      )}
            </div>
        
         
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewById;

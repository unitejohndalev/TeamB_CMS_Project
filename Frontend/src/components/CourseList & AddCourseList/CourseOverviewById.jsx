//february 3 modification of ui and functionalities -gem
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { IoAdd } from "react-icons/io5";
import ChapterModal from "../Chapter Modal/ChapterModal";
import DeleteChapterModal from "../Chapter Modal/DeleteChapterModal";
//edit icon
import { FaEdit } from "react-icons/fa";
//delete icon
import { RiDeleteBinLine } from "react-icons/ri";
import EditChapterTitle from "./EditChapterTitle";


import { IoSearchSharp } from "react-icons/io5";

import CopyofCreateChapterTitle from "./CopyofCreateChapterTitle";

import data from "../../mockData/CourseOverviewCard.json";

const CourseOverviewById = () => {
  // const { courses, setCourses } = useContext(CourseContext);

  const[ showChapModal, setShowChapModal] = useState(false);

  const [chapters, setChapters]=useState([]);

  // const { showCreateChapter, setShowCreateChapter } = useContext(ChapterContext);


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

  const [createModalVisible, setCreateModalVisible]= useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedChapterId, setSelectedChapterId] = useState(null);

  const handleEditClick = (chapterId) => {
    setSelectedChapterId(chapterId);
    setEditModalVisible(true);
  };

  const handleDeleteChapter = (chapterId) =>{
      //  await axios.delete(`http://localhost:8080/api/chapters/${chapterId}`);
      setSelectedChapterId(chapterId);
      setDeleteModalVisible(true);
    
  }
  console.log(data);
  //mockdata chapter destructure
  const { chapterlist } = data;
  
  // const [createChapTitle, setcreateChapTitle] = useState(null);

  
  return (
    <>
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

                    
                  </div>
                  
                  <Link className="flex absolute right-2 ">
                      <div
                        
                        className="flex items-center gap-2 pl-2- cursor-pointer "
                      >
                        <div className="text-[1.3rem] 2xl:text-[2rem]  text-white" onClick={() => handleEditClick(chapter.chapId)} >
                          <FaEdit />
                        </div>

                        <div className="text-[1.3rem] 2xl:text-[2rem]  text-white" onClick={() => handleDeleteChapter(chapter.chapiId)} >
                          <RiDeleteBinLine />
                        </div>
                      </div>
                    </Link>
                </div>
              </div>
      
          );
        })}{" "}
        {editModalVisible && (
           <div className="fixed top-9 left-20 pl-10 w-full h-full">
           <div className="lg:w-[1080px] ">
          <ChapterModal
            chapterId={selectedChapterId}
            onClose={() => setEditModalVisible(false)}
            onSaved={() => setEditModalVisible(false)}
          />
           </div>
          
          </div>
        )}
        {deleteModalVisible && (
          <div className="fixed top-9 left-20 pl-10 w-full h-full">
             <div className="lg:w-[1080px] ">
              <DeleteChapterModal
               chapterId={selectedChapterId}
               onClose={() => setDeleteModalVisible(false)}
               onSaved={() => setDeleteModalVisible(false)}
              />
              </div>
              </div>
        )}

      <div className="w-full lg:w-[12rem] m-auto lg:flex lg:justify-center lg:items-center">
       
          
      {/*add new chapter title */}
          <div className="lg:rounded-[1rem] lg:h-[50px] 2xl:h-[65px] flex items-center justify-center w-[100%] lg:w-[100%] cursor-pointer bg-[#BCE8B1]">
            <button className="flex items-center justify-center w-full" onClick={() => setShowChapModal((prev) => !prev)}>
              <span className="pr-1">
                <IoAdd className="text-[2rem] lg:text-[2.5rem] text-white" />
              </span>
              <span className="text-shadow lg:text-[1rem] lg:font-bold 2xl:text-[24px]  text-[#070101] text-opacity-[55%] pr-1">
                Add Chapter Title
              </span>
           
            </button>
         
            </div>
            <div className="absolute">
              <div className="lg:w-[1080px] ">
            {showChapModal && <CopyofCreateChapterTitle 
             /> }
            </div>
            </div>
      
        
            </div>
        </div>
{/*       
      </div> */}
    </div>
    </>
  );
};

export default CourseOverviewById;
//february 3 modification of ui and functionalities -gem

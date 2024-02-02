import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import vidUpload from "../../assets/vidUpload.svg";
import quizLink from "../../assets/quizLink.svg";
import Footer from "../Footer";

const EditTopicPage = () => {
  const [videoInputValue, setVideoInputValue] = useState("");
  const [quizInputValue, setQuizInputValue] = useState("");
  const [isVideoPopupOpen, setVideoPopupOpen] = useState(false);
  const [isQuizPopupOpen, setQuizPopupOpen] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

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

  const handleVideoDoneClick = () => {
    console.log("Video Done button clicked. Input value:", videoInputValue);
    toggleVideoPopup();
  };

  const handleQuizDoneClick = () => {
    console.log("Quiz Done button clicked. Input value:", quizInputValue);
    toggleQuizPopup();
  };

  const handleVideoCancelClick = () => {
    setVideoInputValue("");
    console.log("Video Cancel button clicked");
    toggleVideoPopup();
  };

  const handleQuizCancelClick = () => {
    setQuizInputValue("");
    console.log("Quiz Cancel button clicked");
    toggleQuizPopup();
  };

  return (
    <>
      <div className="flex mt-[100px]">
        {/* sidebar */}
        <div className="h-[100vh] flex flex-col items-center lg:w-[250px] 2xl:w-[375px] bg-[#126912]">
          <div className="flex items-center mt-3 cursor-pointer" onClick={goBack}>
            <span className="text-[2.5rem] text-white">
              <IoArrowBackCircle />
            </span>
            <span className="text-[1rem] pl-1 text-white">Back</span>
          </div>
          <div className="hidden lg:flex lg:border-b lg:border-white w-[90%] "></div>
          <div>
            <p className="text-white w-[3vw] text-center py-10">HTML & CSS</p>
          </div>
          <div className="">
            <div>
              <p className="py-2 text-white">Topic 1: Title</p>
            </div>
            <div>
              <p className="py-2 text-white">Topic 2: Title</p>
            </div>
            <div>
              <p className="py-2 text-white">Topic 3: Title</p>
            </div>
            <div>
              <p className="py-2 text-white">Topic 4: Title</p>
            </div>
            <div>
              <p className="py-2 text-white">Topic 5: Title</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10 cursor-pointer">
            <div className="text-white text-[2rem] pr-2">
              <IoIosAddCircle />
            </div>
            <span className="text-white">Add New Topic</span>
          </div>
        </div>
        {/* add topic title */}
        <div className="h-[100vh] w-full pt-2">
          <div className="flex items-center justify-end w-full ">
            <Link to="/displaytopic">
              <div className="flex items-center gap-2 pr-5 cursor-pointer">
                <div className="text-[#4c604c] text-[1.5rem]">
                  <FaEdit />
                </div>
                <span className="text-[#126912] font-semibold">Save</span>
              </div>
            </Link>
          </div>
          <div className="w-[90%] m-auto">
            <span className="lg:text-[2rem] 2xl:text-[48px] font-semibold ">
              Course Title
            </span>
            <div className="flex items-center ">
              <span className="lg:text-[1.5rem] 2xl:text-[36px] pr-2 text-[#070101] text-opacity-[55%]">
                Chapter Title:
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Topic Title"
                className="bg-[#BCE8B1] rounded-lg placeholder:text-[#626262] placeholder:pl-2 outline-none pl-2"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder=" Lorem ipsum dolor sit amet. Ut labore facere aut dolorem deleniti cum repudiandae delectus aut quam beatae aut aliquam omnis sed harum odio. Eos consectetur placeat sit itaque ipsum qui laudantium autem. Et voluptatum optio At odio amet cum enim dicta sed deleniti adipisci ut maiores perspiciatis. Aut dicta soluta qui sapiente quibusdam ut tempore facilis et ducimus provident. Hic voluptates incidunt aut quaerat quam id maiores voluptatem et architecto nobis non mollitia eius non magnam neque id voluptatum quasi. Quo nemo officiis qui repellendus voluptatem quo atque consequuntur sit inventore dolorum ut obcaecati ratione sed quibusdam ipsam et quasi inventore."
              className="bg-[#BCE8B1] resize-none lg:min-w-[100%] 2xl:h-[264px] lg:h-[25vh] placeholder:font-medium placeholder:text-center placeholder:p-6
              outline-none rounded-lg placeholder:text-[#070101] placeholder:text-opacity-[55%] mt-5 pl-5"
            />
          </div>
          <div className="flex w-[90%] m-auto items-center justify-center lg:gap-x-[5rem] lg:mt-[3rem]">
            <div
              className="relative 2xl:w-[491px] 2xl:h-[282px] lg:w-[20vw] lg:h-[20vh] bg-[#126912] rounded-lg flex items-center justify-center cursor-pointer"
              onClick={toggleVideoPopup}
            >
              <img
                src={vidUpload}
                alt=""
                className="lg:w-[3rem] 2xl:w-[84px] 2xl:h-[87px]"
              />
            </div>
            <div
              className="relative 2xl:w-[491px] 2xl:h-[282px] lg:w-[20vw] lg:h-[20vh] bg-[#126912] rounded-lg flex items-center justify-center cursor-pointer"
              onClick={toggleQuizPopup}
            >
              <img
                src={quizLink}
                alt=""
                className="lg:w-[3rem] 2xl:w-[84px] 2xl:h-[87px]"
              />
            </div>
          </div>
          {/* Video Popup */}
          {isVideoPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-[#EBFFE5] p-8 rounded-lg z-10">
                <p className="text-lg font-semibold mb-4">Add video Link</p>
                <input
                  type="text"
                  value={videoInputValue}
                  onChange={handleVideoInputChange}
                  className="w-[724px] bg-[#BCE8B1] p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="https://www"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleVideoCancelClick}
                    className="text-black py-2 px-4 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleVideoDoneClick}
                    className="bg-[#126912] text-white py-2 px-4 rounded-full ml-2"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Quiz Popup */}
          {isQuizPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="bg-[#EBFFE5] p-8 rounded-lg z-10">
                <p className="text-lg font-semibold mb-4">Add Quiz Link</p>
                <input
                  type="text"
                  value={quizInputValue}
                  onChange={handleQuizInputChange}
                  className="w-[724px] bg-[#BCE8B1] p-2 border border-gray-300 rounded-md mb-4"
                  placeholder="https://www"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleQuizCancelClick}
                    className="text-black py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleQuizDoneClick}
                    className="bg-[#126912] text-white py-2 px-4 rounded-full ml-2"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="mt-5">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTopicPage;

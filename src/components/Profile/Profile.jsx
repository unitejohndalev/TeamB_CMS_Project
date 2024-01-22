import React, { useContext, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AccDetails from "./AccDetails";

//arrow back icon
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { DashBoardContext } from "../context/DashBoardContext";


const Profile = () => {
  //use navigate to back
  const navigate = useNavigate();
  
  //use context for dropdown
  const { showDropDown, setShowDropDown } = useContext(DashBoardContext);
  
    const goBack = () => {
      navigate(-1);
    };
  // To make PersonalInfo appear when Personal Information is clicked use
  // React hook and a function

  // To make Personal Info or Acc detail component show and hide only when clicked create
  // A function that makes either of them show or hide when clicked at the same time
  const [showPersonalInfo, setPersonalInfo] = useState(true)
  const [showAccDetails, setShowAccDetails] = useState(false)

  const showPInfo = () => {
    setPersonalInfo(() => prev => !prev)
    setShowAccDetails(false)
    setShowDropDown(false)
  }
    const showADetails = () => {
      setShowAccDetails(() => (prev) => !prev);
      setPersonalInfo(false);
      setShowDropDown(false)
    };
  return (
    <>
      <div className="h-[100vh]">
        <div>
          {/* Use react icon instead of word back */}
          <div
            className="flex items-center mt-3 cursor-pointer w-[10%]"
            onClick={goBack}>
            <span className="text-[2.5rem]">
              <IoArrowBackCircle />
            </span>
            <span className="text-[1rem] pl-1">Back</span>
          </div>
        </div>
        {/* 1/11/2024 fix nav */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-5 lg:mt-1 ">
          <div className="lg:w-[20%] xl:w-[449px] xl:h-[440px] lg:h-[35vh] lg:shadow-lg bg-[#BCE8B1] lg:flex lg:items-center lg:flex-col lg:rounded-md">
            <p className="lg:p-5 lg:text-[1.2rem] xl:text-[32px] font-bold text-[#4D4141] opacity-[80%]">
              Profile Management
            </p>

            <div className="hidden lg:flex lg:border-b-2 lg:border-black w-[90%]"></div>
            {/* Make Personal Information & Acc Details clickable */}
            {/* When element Personal Info clicked, must navigate to Personal Info Component same as Acc Details */}
            {/* Use react icon instead of plain text for better UI in mobile and desktop */}
            {/* In desktop mode when hovered a text Personal Information must show, same as Account Details */}
            <p
              className={
                showPersonalInfo
                  ? "cursor-pointer lg:mt-2 lg:p-2 lg:text-[1.2rem] xl:text-[32px] text-[#000000] opacity-[53%] bg-[#126912] lg:w-[100%] lg:text-center bg-opacity-[25%] "
                  : "cursor-pointer lg:mt-2 lg:p-2 lg:text-[1.2rem] xl:text-[32px] text-[#4D4141] hover:text-[#000000] opacity-[53%] lg:w-[100%] lg:text-center "
              }
              onClick={showPInfo}>
              Personal Information
            </p>
            <p
              className={
                showAccDetails
                  ? "cursor-pointer lg:text-[1.2rem] xl:text-[32px] lg:p-2 text-[#000] opacity-[53%] bg-[#126912] lg:w-[100%] lg:text-center bg-opacity-[25%]"
                  : "cursor-pointer lg:text-[1.2rem] xl:text-[32px] lg:p-2 text-[#4D4141] hover:text-[#000] opacity-[53%]  lg:w-[100%] lg:text-center "
              }
              onClick={showADetails}>
              Account Details
            </p>
          </div>
          <div>
            {/* Place your Component here */}
            {showPersonalInfo && <PersonalInfo />}
            {showAccDetails && <AccDetails />}
            {/* /* Place AccDetails Component here */}
            {/* <AccDetails/> */}
          </div>
        </div>
        <div className="pt-5">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Profile;

//1/17/2024

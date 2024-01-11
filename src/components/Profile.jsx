import React from "react";
import PersonalInfo from "./PersonalInfo";
import AccDetails from "./AccDetails";

const Profile = () => {
  // To make PersonalInfo appear when Personal Information is clicked use
  // React hook and a function


  // To make Personal Info or Acc detail component show and hide only when clicked create
  // A function that makes either of them show or hide when clicked at the same time
  return (
    <>
      <div>
        <div>
        {/* Use react icon instead of word back */}
          <span>arrow back</span>
        </div>
        {/* 1/11/2024 fix nav */}
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-5 lg:mt-5">
          <div className="lg:w-[30%] lg:h-[30vh] lg:shadow-lg">
            <p>Account Details</p>
            {/* Make Personal Information & Acc Details clickable */}
            {/* When element Personal Info clicked, must navigate to Personal Info Component same as Acc Details */}
            {/* Use react icon instead of plain text for better UI in mobile and desktop */}
            {/* In desktop mode when hovered a text Personal Information must show, same as Account Details */}
            <p>Personal Information</p>
            <p>Account Details</p>
          </div>
      <div>
      {/* Place your Component here */}
        {/* <PersonalInfo/> */}
        {/* Place AccDetails Component here */}
        <AccDetails/>
      </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

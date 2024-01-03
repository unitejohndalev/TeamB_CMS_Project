import React from "react";
import PersonalInfo from "./PersonalInfo";

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
          <span>arrow</span>
        </div>
        <div>
          <div>
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
        <PersonalInfo/>
        {/* Place AccDetails Component here */}
      </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

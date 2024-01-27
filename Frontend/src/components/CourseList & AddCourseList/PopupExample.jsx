import React, { useState } from 'react';

const PopupExample = ({ isPopupVisible, togglePopup, limitMessage }) => {
  return (
    <div className="text-center">
      <h2>Popup</h2>

      <div className="relative inline-block cursor-pointer" onClick={togglePopup}>
        {/* Trigger */}
        <div className="bg-blue-500 text-white p-2 rounded-md">Click me to toggle the popup!</div>

        {/* Popup */}
        <div
          className={`${
            isPopupVisible ? 'visible' : 'invisible'
          } w-40 bg-gray-800 text-white text-center rounded-md py-2 absolute z-10 bottom-125 left-1/2 transform -translate-x-1/2`}
        >
          {limitMessage ? (
            <div>{limitMessage}</div>
          ) : (
            <div>A Simple Popup!</div>
          )}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-4 border-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default PopupExample;

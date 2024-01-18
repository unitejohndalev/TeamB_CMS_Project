import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditTopic = () => {
  const [topic, setTopic] = useState({
    title: "",
    description: "",
    videoLink: "",  // Add the videoLink field to the state
  });

  const [topics, setTopics] = useState([
    { title: "Chapter 1: Title 1", description: "" },
  ]);
  const [editableTopicIndex, setEditableTopicIndex] = useState(0);

  return (
    <div className="flex h-[100vh]">
      {/* Side Navigation Bar */}
      <nav className="w-1/4 bg-[#1E6C0B] p-4">
        <ul className="bg-[#1E6C0B] flex flex-col h-full">
          <li className="mb-2">
            {/* Apply styling to the back button */}
            <button className="text-white hover:underline" style={{ pointerEvents: "none" }}>
              <Link to="/">Back</Link>
            </button>
          </li>
          <li className="flex-grow text-white mb-4 font-bold">Topics:</li>
          {/* Display the list of topics */}
          {topics.map((t, index) => (
            <li
              key={index}
              className={`mb-2 cursor-pointer text-white ${
                editableTopicIndex === index ? "font-bold" : ""
              }`}
              style={{ pointerEvents: "none" }}
            >
              {t.title}
            </li>
          ))}
          {/* Add a button to add a new topic */}
          <li className="mt-auto">
            <button className="flex items-center text-blue-500" style={{ pointerEvents: "none" }}>
              Add New Topic
            </button>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="flex-grow p-4 flex flex-col items-center">
        {/* Save button added on the right top corner below the navigation bar */}
        <div className="mb-4 flex items-center justify-end w-full">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" style={{ pointerEvents: "none" }}>
            Save
          </button>
        </div>
        {/* Center content */}
        <div className="mb-5 flex items-center">
          <h1 className="text-2xl font-bold mb-2 mr-4">Course Title</h1>
        </div>

        <form className="flex flex-col w-full">
          {/* Center form */}
          <div className="mb-4 flex items-center">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600 mr-2"
              style={{ pointerEvents: "none" }}
            >
              Chapter Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={topic.title}
              onChange={() => {}}
              className="p-2 border border-gray-300 rounded-md flex-grow"
              placeholder="Add Topic Title"
              required
              style={{ pointerEvents: "none" }}
            />
          </div>
          <div className="mb-4 w-full"> {/* Set width to full */}
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
              style={{ pointerEvents: "none" }}
            ></label>
            <textarea
              id="description"
              name="description"
              value={topic.description}
              onChange={() => {}}
              onFocus={() => {}}
              onBlur={() => {}}
              rows="6"
              className={`mt-1 p-2 border border-gray-300 rounded-md w-full lg:w-100 resize-none`}
              placeholder="Add Topic Description..."
              required
              style={{ pointerEvents: "none" }}
            ></textarea>
          </div>
          {/* Additional input for video link and file */}
          <div className="mb-4 flex flex-col items-center w-full">
            {/* Center additional inputs */}
            <div className="mb-2 w-full flex justify-center"> {/* Set width to full and center content */}
              <div className="w-1/2 mr-2"> {/* Set width to half */}
                <label
                  htmlFor="videoLink"
                  className="block text-sm font-medium text-gray-600"
                  style={{ pointerEvents: "none" }}
                >
                  Video Link:
                </label>
                <input
                  type="text"
                  id="videoLink"
                  name="videoLink"
                  value={topic.videoLink}
                  onChange={() => {}}
                  className="p-2 border border-gray-300 rounded-md w-full"
                  placeholder="Add Video Link"
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <div className="w-1/2"> {/* Set width to half */}
                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-600"
                  style={{ pointerEvents: "none" }}
                >
                  File:
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={() => {}}
                  className="p-2 border border-gray-301 rounded-md w-full"
                  style={{ pointerEvents: "none" }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTopic;

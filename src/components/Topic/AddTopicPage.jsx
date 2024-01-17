import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddTopicPage = () => {
  const [topic, setTopic] = useState({
    title: "",
    description: "",
  });

  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
  const [topics, setTopics] = useState([{ title: "Chapter 1: Title 1", description: "" }]);
  const [editableTopicIndex, setEditableTopicIndex] = useState(0);

  const handleInputChange = (e) => {
    setTopic({ ...topic, [e.target.name]: e.target.value });
  };

  const handleDescriptionFocus = () => {
    setIsDescriptionFocused(true);
  };

  const handleDescriptionBlur = () => {
    setIsDescriptionFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for handling form submission
    console.log("Form Submitted");
    // Update the edited topic in the list of topics
    setTopics((prevTopics) => {
      const updatedTopics = [...prevTopics];
      updatedTopics[editableTopicIndex] = { ...topic };
      return updatedTopics;
    });
    // Clear the form fields after submission
    setTopic({ title: "", description: "" });
  };

  const handleSave = () => {
    // Implement the logic to save the topic
    console.log("Saving Topic:", topic);
  };

  const handleAddNewTopic = () => {
    // Generate a new topic with the format "Chapter [index]: Title [index]"
    const newTopic = {
      title: `Chapter ${topics.length + 1}: Title ${topics.length + 1}`,
      description: "",
    };

    // Add the new topic to the list of topics
    setTopics([...topics, newTopic]);

    // Set the new topic as the current editable topic
    setEditableTopicIndex(topics.length);
  };

  return (
    <div className="flex">
      {/* Side Navigation Bar */}
      <nav className="w-1/4 bg-gray-200 p-4">
        <ul className="flex flex-col h-full">
          <li className="mb-2">
            <Link to="/">Home</Link>
          </li>
          <li className="flex-grow mb-4 font-bold">Topics:</li>
          {/* Display the list of topics */}
          {topics.map((t, index) => (
            <li key={index} className={`mb-2 cursor-pointer ${editableTopicIndex === index ? 'font-bold' : ''}`}
                onClick={() => setEditableTopicIndex(index)}>
              {t.title}
            </li>
          ))}
          {/* Add a button to add a new topic */}
          <li className="mt-auto">
            <button
              onClick={handleAddNewTopic}
              className="text-blue-500"
            >
              Add New Topic
            </button>
          </li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="flex-grow p-4">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Add Topic</h1>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Topic Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={topic.title}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Topic Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={topic.description}
              onChange={handleInputChange}
              onFocus={handleDescriptionFocus}
              onBlur={handleDescriptionBlur}
              rows="4"
              className={`mt-1 p-2 border border-gray-300 rounded-md w-full ${
                isDescriptionFocused ? "" : "placeholder-opacity-50"
              }`}
              placeholder="Type your description here..."
              required
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTopicPage;

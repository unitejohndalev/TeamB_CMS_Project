/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const CourseContext = createContext();

const CourseProvider = ({children}) => {
  //react state for course api
  const [courses, setCourses] = useState([]);

  
  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
      }}>
      {children}
    </CourseContext.Provider>
  );
}

export default CourseProvider

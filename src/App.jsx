import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import PersonalInfo from './components/PersonalInfo';
import CourseList from './components/CourseList & AddCourseList/CourseList';
import LogIn from './components/LogIn';

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
 
  return (
    <>
    
      <Nav />
     
    
      <LogIn/>
     
      <Footer />
    </>
  );
}

export default App;

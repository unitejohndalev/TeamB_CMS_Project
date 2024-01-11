import {Route, Routes} from "react-router-dom"
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import PersonalInfo from "./components/PersonalInfo";
import CourseList from "./components/CourseList & AddCourseList/CourseList";
import CourseListCard from "./components/CourseList & AddCourseList/CourseListCard";
import LogIn from "./components/LogIn";
import DashboardCard from "./components/DashboardCard";


function App() {
  return (
    <><Nav/>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/courselist" element={<CourseList/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
      <Footer/>
    </>
  );
}



export default App;

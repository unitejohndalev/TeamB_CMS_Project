import { Route, Routes } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/DashBoard/Dashboard";
import PersonalInfo from "./components/Profile/PersonalInfo";
import CourseList from "./components/CourseList & AddCourseList/CourseList";
import CourseListCard from "./components/CourseList & AddCourseList/CourseListCard";
import LogIn from "./components/LogIn";
import DashboardCard from "./components/DashBoard/DashboardCard";
import AddNewCourse from "./components/CourseList & AddCourseList/AddNewCourse";
import CourseOverview from "./components/CourseList & AddCourseList/CourseOverview";

function App() {
  return (

    <div className="bg-[#EBFFE5]">
      <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/addnewcourse" element={<AddNewCourse />} />
        <Route path="/courseoverview" element={<CourseOverview />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

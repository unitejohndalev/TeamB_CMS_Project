import { Route, Routes } from "react-router-dom";
import Nav from "./components/NavBar/Nav";

import Profile from "./components/Profile/Profile";
import Dashboard from "./components/DashBoard/Dashboard";

import CourseList from "./components/CourseList & AddCourseList/CourseList";

import AddNewCourse from "./components/CourseList & AddCourseList/AddNewCourse";
import CourseOverview from "./components/CourseList & AddCourseList/CourseOverview";

import EditTopicPage from "./components/Topic/EditTopicPage";

import DisplayTopic from "./components/Topic/DisplayTopic";
import AddTopicTitlePage from "./components/Topic/AddTopicTitlePage";
import EditChapterTitle from "./components/CourseList & AddCourseList/EditChapterTitle";
import CreateNewChapterTitle from "./components/CourseList & AddCourseList/CreateNewChapterTitle";

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
        <Route path="/editchaptertitle" element={<EditChapterTitle />} />
        <Route
          path="/createnewchaptertitle"
          element={<CreateNewChapterTitle />}
        />
        <Route path="/addtopictitlepage" element={<AddTopicTitlePage />} />
        <Route path="/displaytopic" element={<DisplayTopic />} />
        <Route path="/edittopic" element={<EditTopicPage />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

//2/2/2024 junite, added edit topic component


import { Route, Routes } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Nav from "./components/NavBar/Nav";
import Fallbackloading from "./components/FallbackLoading";
import CourseTitleModal from "./components/CourseList & AddCourseList/CourseModal/CourseTitleModal";


const Profile = lazy(() => import("./components/Profile/Profile"));

const Dashboard = lazy(() => import("./components/DashBoard/Dashboard"));

const CourseList = lazy(() =>
  import("./components/CourseList & AddCourseList/CourseList")
);

const AddNewCourse = lazy(() =>
  import("./components/CourseList & AddCourseList/AddNewCourse")
);

const CourseOverview = lazy(() =>
  import("./components/CourseList & AddCourseList/CourseOverview")
);

const EditTopicPage = lazy(() => import("./components/Topic/EditTopicPage"));

const DisplayTopic = lazy(() => import("./components/Topic/DisplayTopic"));
const AddTopicTitlePage = lazy(() =>
  import("./components/Topic/AddTopicTitlePage")
);

const EditChapterTitle = lazy(() =>
  import("./components/CourseList & AddCourseList/EditChapterTitle")
);
const CreateNewChapterTitle = lazy(() =>
  import("./components/CourseList & AddCourseList/CreateNewChapterTitle")
);
const CreateNewCourseCopy = lazy(() =>
  import("./components/CourseList & AddCourseList/CreateCourse/CreateNewCourse")
); 

const EditTopic = lazy(() => import("./components/Topic/TopicPages/EditTopic"))


function App() {
  return (
    <div className="bg-[#EBFFE5]">
      <Nav />
      <Suspense fallback={<Fallbackloading />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courselist" element={<CourseList />} />
          <Route path="/addnewcourse" element={<AddNewCourse />} />
          <Route path="/courseoverview/:id" element={<CourseOverview />} />
          <Route path="/dropdown" element={<dropdown/>}/>
          <Route path="/editchaptertitle/:id" element={<EditChapterTitle />} />
          <Route
            path="/createnewchaptertitle" //path="/createnewchaptertitle/:id"
            element={<CreateNewChapterTitle />}
          />
          <Route path="/addtopictitlepage" element={<AddTopicTitlePage />} />
          <Route path="/displaytopic" element={<DisplayTopic />} />
          <Route path="/edittopic" element={<EditTopic />} />
          <Route path="createnewcoursecopy" element={<CreateNewCourseCopy/>}/>
          <Route path="/coursetitlemodal" element={<CourseTitleModal/>}/>
          


        </Routes>

        {/* <Footer /> */}
      </Suspense>
    </div>
  );
}

export default App;

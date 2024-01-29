import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

// IMPORT COURSES API CONTEXT PROVIDER
import CourseProvider from "./components/context/CourseContext.jsx";
//import dashboardprovider
import DashBoardProvider from "./components/context/DashBoardContext.jsx";

//import NavBarProvider
import NavBarProvider from "./components/context/NavBarContext.jsx";

//import ProfileProvider
import ProfileProvider from "./components/context/ProfileContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <CourseProvider>
      <ProfileProvider>
        <NavBarProvider>
          <DashBoardProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </DashBoardProvider>
        </NavBarProvider>
      </ProfileProvider>
    </CourseProvider>
  </Router>
);

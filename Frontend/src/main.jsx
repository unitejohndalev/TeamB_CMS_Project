import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

//import dashboardprovider
import DashBoardProvider from "./components/context/DashBoardContext.jsx";

//import NavBarProvider
import NavBarProvider from "./components/context/NavBarContext.jsx";

//import ProfileProvider
import ProfileProvider from "./components/context/ProfileContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <ProfileProvider>
      <NavBarProvider>
        <DashBoardProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </DashBoardProvider>
      </NavBarProvider>
    </ProfileProvider>
  </Router>
);

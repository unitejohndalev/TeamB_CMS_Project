import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

//import dashboardprovider
import DashBoardProvider from "./components/context/DashBoardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <DashBoardProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DashBoardProvider>
  </Router>
);

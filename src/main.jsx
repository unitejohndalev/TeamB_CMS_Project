import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  // 1/11/2024
  <React.StrictMode>
    <Router>

    <App />
    </Router>
    
  </React.StrictMode>
);
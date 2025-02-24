import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import SideBar from "./components/SideBar/SideBar";
import ConfigurationPage from "./Pages/ConfigurationPage/ConfigurationPage";
import "./index.css";
import DevicesPage from "./Pages/DevicesPage/DevicesPage";
import LeaderboardPage from "./Pages/LeaderboardPage/LeaderboardPage";

const App = () => {
  return (
    <Router>
      <div id="app-container">
        <SideBar />
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/configuration/customization" replace />}
          />
          <Route
            path="/configuration/customization"
            element={<ConfigurationPage />}
          />
          <Route path="/configuration/devices" element={<DevicesPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

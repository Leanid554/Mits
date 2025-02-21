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

const App = () => {
  return (
    <Router>
      <div id="app-container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Navigate to="/configuration" replace />} />
          <Route path="/configuration" element={<ConfigurationPage />} />
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

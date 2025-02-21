import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./Pages/MainPage/MainPage";
import SideBar from "./components/SideBar/SideBar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SideBar />
    <MainPage />
  </React.StrictMode>
);

reportWebVitals();

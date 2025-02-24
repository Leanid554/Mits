import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./index.scss";

export default function Tabs({ activeTab, setActiveTab, language }) {
  const navigate = useNavigate(); 

  const tabs = [
    { key: "customizations", en: "Customizations", pl: "Dostosowania", path: "/" },
    { key: "devices", en: "Devices", pl: "Urządzenia", path: "/configuration/devices" },
    { key: "tags", en: "Tags", pl: "Tagi", path: "/" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.key); 
    navigate(tab.path); 
  };

  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {language === "en" ? tab.en : tab.pl}
            </button>
          ))}
        </div>
      </div>

      <div className="buttons">
        <button className="cancel" onClick={() => navigate("/")}>
          {language === "en" ? "Cancel" : "Anuluj"}
        </button>
        <button className="save">
          {language === "en" ? "Save" : "Zapisz"}
        </button>
      </div>
    </div>
  );
}

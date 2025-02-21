import React from "react";
import "./index.scss";

export default function Tabs({ activeTab, setActiveTab, language }) {
  const tabs = [
    { key: "customizations", en: "Customizations", pl: "Dostosowania" },
    { key: "devices", en: "Devices", pl: "Urządzenia" },
    { key: "tags", en: "Tags", pl: "Tagi" },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs-wrapper">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {language === "en" ? tab.en : tab.pl}
            </button>
          ))}
        </div>
      </div>

      <div className="buttons">
        <button className="cancel">{language === "en" ? "Cancel" : "Anuluj"}</button>
        <button className="save">{language === "en" ? "Save" : "Zapisz"}</button>
      </div>
    </div>
  );
}

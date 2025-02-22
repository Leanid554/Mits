import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Tabs from "../../components/Tab/Tab";
import "./index.scss";

export default function DevicesPage() {
  const [language, setLanguage] = useState("en");
  const [activeTab, setActiveTab] = useState("devices");
  const [selectedDevice, setSelectedDevice] = useState("07.00000001 - KU Launch Pad Left");
  const [deviceName, setDeviceName] = useState("KU Launch Pad Left");
  const [rotation, setRotation] = useState("KU Launch Pad Left");

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  return (
    <div className="">
      <NavBar title={language === "en" ? "Devices" : "Urządzenia"} setLanguage={setLanguage} />

      <div className="container">
        <Tabs activeTab={activeTab} setActiveTab={handleTabChange} language={language} />
      </div>

      <div className="device-settings-card devices-page">
        <h3>{language === "en" ? "Deviced" : "Urządzenie"}</h3>
        <p>{language === "en" ? "Select a device from the list" : "Wybierz urządzenie z listy"}</p>

        <select 
          className="device-dropdown" 
          value={selectedDevice} 
          onChange={(e) => setSelectedDevice(e.target.value)}
        >
          <option>07.00000001 - KU Launch Pad Left</option>
          <option>07.00000002 - KU Launch Pad Right</option>
        </select>

        <div className="device-inputs">
          <div className="input-group unput-name-device">
            <label>{language === "en" ? "Deviced name" : "Nazwa urządzenia"}</label>
            <input 
              type="text" 
              value={deviceName} 
              onChange={(e) => setDeviceName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>{language === "en" ? "Rotation" : "Rotacja"}</label>
            <input 
              type="text" 
              value={rotation} 
              onChange={(e) => setRotation(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

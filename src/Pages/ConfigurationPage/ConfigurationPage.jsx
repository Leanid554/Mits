import React, { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import "./index.scss";
import Tabs from "../../components/Tab/Tab";

export default function ConfigurationPage() {
  const [language, setLanguage] = useState("en");
  const [activeTab, setActiveTab] = useState("customizations");

  return (
    <div className="configuration-page">
      <NavBar 
        title={language === "en" ? "Configuration" : "Konfiguracja"} 
        setLanguage={setLanguage} 
      />

        <div className="container">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} language={language}  />
        </div>
   
      <div className="settings-container container">
        {activeTab === "customizations" && (
          <>
            {/* left panel */}
            <div className="settings-card">
              <h3>{language === "en" ? "Regional Settings" : "Ustawienia regionalne"}</h3>
              <p>{language === "en" ? "Set your language and timezone" : "Ustaw język i strefę czasową"}</p>
            <div className="flex-labels">

           
              <div className="form-group">
                <label>{language === "en" ? "Language" : "Język"}</label>
                <select>
                  <option>English</option>
                  <option>Polski</option>
                </select>
              </div>

              <div className="form-group">
                <label>{language === "en" ? "Timezone" : "Strefa czasowa"}</label>
                <select>
                  <option>GMT +02:00</option>
                  <option>GMT +03:00</option>
                </select>
              </div>

              </div>
             
              <div className="form-group">
                <label>{language === "en" ? "Date Format" : "Format daty"}</label>
                <select>
                  <option>YYYY/MM/DD</option>
                  <option>DD/MM/YYYY</option>
                </select>
              </div>

              <div className="form-group">
                <label>{language === "en" ? "Measurement Units" : "Jednostki miary"}</label>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="units" defaultChecked />
                    Metric
                  </label>
                  <label>
                    <input type="radio" name="units" />
                    Imperial
                  </label>
                </div>
              </div>
              </div>
         
            

            {/* right panel*/}
            <div className="settings-card">
              <h3>{language === "en" ? "Select display mode" : "Wybierz tryb wyświetlania"}</h3>
              <p>
                {language === "en"
                  ? "Changing the display theme allows you to adjust the app to lighting conditions and your preferences"
                  : "Zmiana motywu pozwala dostosować aplikację do warunków oświetleniowych i twoich preferencji"}
              </p>

              <div className="form-group toggle">
                <label>Dark Mode</label>
                <input type="checkbox" />
              </div>

              <div className="form-group toggle">
                <label>Light Mode</label>
                <input type="checkbox" defaultChecked />
              </div>

              <div className="form-group toggle">
                <label>Use OS settings</label>
                <input type="checkbox" />
              </div>
            </div>
          </>
        )}

        {activeTab === "devices" && (
          <div className="settings-card">
            <h3>{language === "en" ? "Device Settings" : "Ustawienia urządzeń"}</h3>
            <p>{language === "en" ? "Manage your connected devices" : "Zarządzaj podłączonymi urządzeniami"}</p>
          </div>
        )}

        {activeTab === "tags" && (
          <div className="settings-card">
            <h3>{language === "en" ? "Tag Settings" : "Ustawienia tagów"}</h3>
            <p>{language === "en" ? "Manage and organize your tags" : "Zarządzaj i organizuj swoje tagi"}</p>
          </div>
        )}
      </div>

      
    </div>
  );
}

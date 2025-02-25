import React, { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import Tabs from "../../components/Tab/Tab";
import "./index.scss";

export default function ConfigurationPage() {
  const [language, setLanguage] = useState("en");
  const [activeTab, setActiveTab] = useState("customizations");
  const [date, setDate] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [lightMode, setLightMode] = useState(false);
  const [useOsSettings, setUseOsSettings] = useState(true);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="configuration-page">
      <NavBar
        title={language === "en" ? "Configuration" : "Konfiguracja"}
        setLanguage={setLanguage}
      />

      <div className="container">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} language={language} />
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
                  <label className="pt-19">{language === "en" ? "Language" : "Język"}</label>
                  <select>
                    <option>English</option>
                    <option>Polski</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="pt-19">{language === "en" ? "Timezone" : "Strefa czasowa"}</label>
                  <select>
                    <option>GMT +02:00</option>
                    <option>GMT +03:00</option>
                  </select>
                </div>
              </div>
              <div className="flex-labels">
                <div className="form-group">
                  <label className="pt-19">{language === "en" ? "Date Format" : "Format daty"}</label>
                  <input type="date" value={date} onChange={handleDateChange} />
                </div>
                <div className="form-group pt-form">
                  <label className="text-units pt-19">{language === "en" ? "Measurement Units" : "Jednostki miary"}</label>
                  <div className="radio-group">
                    <label >
                      <input type="radio" name="units"  />
                      Metric
                    </label>
                    <label>
                      <input type="radio" name="units"defaultChecked />
                      Imperial
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* right panel*/}
        <div className="settings-card">
          <h3>{language === "en" ? "Select display mode" : "Wybierz tryb wyświetlania"}</h3>
          <p className="right-block-p">
              {language === "en"
                  ? "Changing the display theme allows you to adjust the app to lighting conditions and your preferences"
                  : "Zmiana motywu pozwala dostosować aplikację do warunków oświetleniowych i twoich preferencji"}
          </p>
          <div className="divider"></div> 

    <div className="form-group toggle pt-19">
        <label className="right-block-label">{language === "en" ? "Dark Mode" : "Tryb ciemny"}</label>
        <label className="switch">
            <input type="checkbox" checked={!darkMode} onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"></span>
        </label>
    </div>


        <div className="form-group toggle">
          <label className="right-block-label">{language === "en" ? "Light Mode" : "Tryb jasny"}</label>
          <label className="switch">
            <input type="checkbox" checked={!lightMode} onChange={() => setLightMode(!lightMode)} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="form-group toggle">
          <label className="right-block-label">{language === "en" ? "Use OS settings" : "Użyj ustawień systemowych"}</label>
          <label className="switch">
            <input type="checkbox" checked={!useOsSettings} onChange={() => setUseOsSettings(!useOsSettings)} />
            <span className="slider round"></span>
          </label>
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

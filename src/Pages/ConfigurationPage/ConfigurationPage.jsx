import React, { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import "./index.scss";

export default function ConfigurationPage() {
  const [language, setLanguage] = useState("en");

  return (
    <div >
      <NavBar 
        title={language === "en" ? "Configuration" : "Konfiguracja"} 
        setLanguage={setLanguage} 
      />
      <div className="container">
        <p>{language === "en" ? "Configuration Page Content" : "Zawartość strony konfiguracji"}</p>
      </div>
      
    </div>
  );
}

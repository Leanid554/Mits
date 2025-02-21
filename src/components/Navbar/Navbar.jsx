import React, { useState } from "react";
import arrow from "./../../assets/icons/arrow.svg";
import user from "./../../assets/img/user.png";
import "./index.scss";

const NavBar = ({ title, setLanguage }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLang, setSelectedLang] = useState("en");

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setLanguage(lang);
    setOpenDropdown(null);
  };

  return (
    <div className="navbar">
      <h2 className="navbar-title">{title}</h2>

      <div className="navbar-actions">
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleDropdown("language")}>
            <span role="img" aria-label="flag">{selectedLang === "en" ? "🇬🇧" : "🇵🇱"}</span>
            <img src={arrow} alt="arrow" className={`dropdown-icon ${openDropdown === "language" ? "rotate" : ""}`} />
          </div>
          {openDropdown === "language" && (
            <ul className="dropdown-menu">
              <li onClick={() => handleLanguageChange("en")}>🇬🇧 English</li>
              <li onClick={() => handleLanguageChange("pl")}>🇵🇱 Polski</li>
            </ul>
          )}
        </div>

        <div className="dropdown">
          <div className="user-profile" onClick={() => toggleDropdown("user")}>
            <img src={user} alt="User" className="user-avatar" />
            <span className="user-name">Jakub Zalas</span>
            <img src={arrow} alt="arrow" className={`dropdown-icon ${openDropdown === "user" ? "rotate" : ""}`} />
          </div>
          {openDropdown === "user" && (
            <ul className="dropdown-menu-profile">
              <li onClick={() => setOpenDropdown(null)}>Profile</li>
              <li onClick={() => setOpenDropdown(null)}>Settings</li>
              <li onClick={() => setOpenDropdown(null)}>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

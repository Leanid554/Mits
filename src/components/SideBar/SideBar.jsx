import Home from "../../assets/icons/logo.svg";
import Settings from "../../assets/icons/settings.svg";
import Dash from "../../assets/icons/dash.svg";
import Test from "../../assets/icons/test.svg";
import Users from "../../assets/icons/teams.svg";
import Lead from "../../assets/icons/leaderboard.svg";
import Conf from "../../assets/icons/conf.svg";
import { useState } from "react";

import "./index.scss";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { icon: Dash, name: "dashboard" },
    { icon: Test, name: "test" },
    { icon: Users, name: "users" },
    { icon: Lead, name: "leaderboard" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Home} alt="home" />
      </div>

      <nav className="nav">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`icon-container ${activeItem === item.name ? "active" : ""}`}
            onClick={() => setActiveItem(item.name)}
          >
            <img src={item.icon} alt={item.name} className="icon" />
          </div>
        ))}
      </nav>

      <div className="bottom-section">
        <div
          className={`icon-container ${activeItem === "settings" ? "active" : ""}`}
          onClick={() => setActiveItem("settings")}
        >
          <img src={Settings} alt="settings" className="icon" />
        </div>

        <div className="status-indicator"></div>
        <div
          className={`icon-container ${activeItem === "settings" ? "active" : ""}`}
          onClick={() => setActiveItem("settings")}
        >
          <img src={Settings} alt="settings" className="icon" />
        </div>
        <div
          className={`icon-container ${activeItem === "conf" ? "active" : ""}`}
          onClick={() => setActiveItem("conf")}
        >
          <img src={Conf} alt="config" className="icon-conf" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

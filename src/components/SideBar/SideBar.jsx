import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Home from "../../assets/icons/logo.svg";
import Settings from "../../assets/icons/settings.svg";
import Dash from "../../assets/icons/dash.svg";
import Test from "../../assets/icons/test.svg";
import Users from "../../assets/icons/teams.svg";
import Lead from "../../assets/icons/leaderboard.svg";
import Conf from "../../assets/icons/conf.svg";
import "./index.scss";

const Sidebar = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { icon: Dash, name: "dashboard", path: "/" },
    { icon: Test, name: "test", path: "/" },
    { icon: Users, name: "users", path: "/" },
    { icon: Lead, name: "leaderboard", path: "/leaderboard" },
  ];

  return (
    <div className="sidebar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={Home} alt="home" />
      </div>

      <nav className="nav">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`icon-container ${location.pathname === item.path ? "active" : ""}`}
            onClick={() => navigate(item.path)}
          >
            <img src={item.icon} alt={item.name} className="icon" />
          </div>
        ))}
      </nav>

      <div className="bottom-section">
        <div
          className={`icon-container ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          <img src={Settings} alt="settings" className="icon" />
        </div>

        <div className="status-indicator"></div>
        <div
          className={`icon-container ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => navigate("/")}
        >
          <img src={Settings} alt="settings" className="icon" />
        </div>

        <div
          className={`icon-container ${location.pathname === "/configuration/customization" || location.pathname === "/configuration/devices" ? "active" : ""}`}
          onClick={() => navigate("/")}
        >

          <img src={Conf} alt="config" className="icon-conf" />
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import path from "./../../assets/icons/Path.svg";
import "./index.scss";
import Dropdown from "react-dropdown-select";

export default function LeaderboardPage() {
  const [language, setLanguage] = useState("en");
  const [metric, setMetric] = useState([]);

  const translationsLevels = {
    en: {
      high: "High",
      medium: "Medium",
      low: "Low"
    },
    pl: {
      high: "Wysoki",
      medium: "Średni",
      low: "Niski"
    }
  };
  
  const options = [
    { value: "high", label: translationsLevels[language].high },
    { value: "medium1", label: translationsLevels[language].medium },
    { value: "medium2", label: translationsLevels[language].medium },
    { value: "medium3", label: translationsLevels[language].medium },
    { value: "medium4", label: translationsLevels[language].medium },
    { value: "medium5", label: translationsLevels[language].medium },
    { value: "medium6", label: translationsLevels[language].medium },
    { value: "low", label: translationsLevels[language].low }
  ];
  

  const handleChange = (selectedOptions) => {
    setMetric(selectedOptions);
  };

  const handleReset = () => {
    setMetric([]); 
  };

  const formatOptionLabel = ({ label, value }) => (
    <div className="custom-option">
      <input
        type="checkbox"
        checked={metric.some((item) => item.value === value)}
        onChange={() => {
          setMetric((prev) =>
            prev.some((item) => item.value === value)
              ? prev.filter((item) => item.value !== value)
              : [...prev, { value, label }]
          );
        }}
      />
      <label>{label}</label>
    </div>
  );

  const renderValues = () => {
    return metric.length > 0
      ? `${language === "en" ? "Filters" : "Filtry"} (${metric.length})`
      : language === "en"
      ? "Filters"
      : "Filtry";
  };

  const translations = {
    en: {
      name: "John Doe",
      height: "67 cm",
      date: "Jan 1, 2025",
      time: "9:35 AM"
    },
    pl: {
      name: "Jan Kowalski",
      height: "67 cm",
      date: "1 sty 2025",
      time: "09:35"
    }
  };
  
  const leaderboardData = new Array(10).fill(translations[language]);
  

  return (
    <div>
      <NavBar title={language === "en" ? "Leaderboard" : "Tabela liderów"} setLanguage={setLanguage} />

      <div className="leaderboard-container">
        <div className="filters">
          <div className="custom-select">
            <div className="select-container">
              <label htmlFor="test-type">{language === "en" ? "Test Type" : "Typ testu"}</label>
              <select id="test-type">
                <option value="cmj">{language === "en" ? "Counter Movement Jump" : "Skok w kontrze do ruchу"}</option>
                <option value="sj">{language === "en" ? "Test Type" : "Skok z przysiady"}</option>
                <option value="dj">{language === "en" ? "Drop Jump" : "Skok z wysokości"}</option>
              </select>
            </div>

            <div className="select-container">
              <label htmlFor="metric-type">Metric</label>
              <Dropdown
                className="custom-dropdown" 
                options={options}
                multi
                onChange={handleChange}
                values={metric}
                placeholder={renderValues()}
                formatOptionLabel={formatOptionLabel}
                contentRenderer={() => <span className="custom-placeholder">{renderValues()}</span>}
              />
            </div>
          </div>
          <button className="reset-button" onClick={handleReset}>
            <img className="icon-reset" src={path} alt="" />
            {language === "en" ? "Reset Filter" : "Zresetuj filtr"}
          </button>
        </div>

        <div className="leaderboard-card">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>{language === "en" ? "Leaderboard" : "Tabela liderów"}</th>
                <th>{language === "en" ? "Height" : "Wysokość"}</th>
                <th>{language === "en" ? "Date" : "Data"}</th>
                <th>{language === "en" ? "Time" : "Czas"}</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}. {entry.name}</td>
                  <td>{entry.height}</td>
                  <td>{entry.date}</td>
                  <td>{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

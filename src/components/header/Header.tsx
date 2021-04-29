import { useState } from "react";
import Switch from "react-switch";
import "./Header.scss";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1>MyPortfolio</h1>
      </div>
      <div className="nav-bar-container">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <Switch
            uncheckedIcon={<span className="switch-icon">🌞</span>}
            checkedIcon={<span className="switch-icon">🌜</span>}
            onChange={() => {
              setIsDarkMode((prevState) => !prevState);
            }}
            checked={isDarkMode}
          />
        </ul>
      </div>
    </div>
  );
};

export default Header;

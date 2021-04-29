import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <h1>Lukman Hidayah</h1>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

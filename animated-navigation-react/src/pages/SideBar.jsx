import { useState } from "react";
import "../css/SideBar.css";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        id="nav"
        className={`${menuOpen ? "active" : ""}`}
        onClick={handleToggle}
      >
        <button className="icon" id="toggle" onClick={handleToggle}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>

        <ul className="sidebar">
          <li>
            <input className="search" type="text" placeholder="   Search" />
          </li>
          <li>
            <a href="./home">
              <button className="home button">Home</button>
            </a>
          </li>
          <li>
            <a href="./works">
              <button className="works button">Dashboards</button>
            </a>
          </li>
          <li>
            <a href="./about">
              <button className="about button">Project</button>
            </a>
          </li>
          <li>
            <a href="./contact">
              <button className="contact button">Tasks</button>
            </a>
          </li>
          <li>
            <a href="./reporting">
              <button className="reporting button">Reporting</button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;

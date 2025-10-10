import { useState } from "react";
import "../css/body.css";

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
        <ul>
          <li>
            <a href="./home">
              <button className="home">Home</button>
            </a>
          </li>
          <li>
            <a href="./works">
              <button className="works">Works</button>
            </a>
          </li>
          <li>
            <a href="./about">
              <button className="about">About</button>
            </a>
          </li>
          <li>
            <a href="./contact">
              <button className="contact">Contact</button>
            </a>
          </li>
        </ul>
        <button className="icon" id="toggle" onClick={handleToggle}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
      </nav>
    </>
  );
}

export default Menu;

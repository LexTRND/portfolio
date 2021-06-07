import Link from "next/link";
import React, {useState} from "react";

export const NavBar = () => {
  const [ clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked);
  };

  const navClick = () => {
    setClicked(false);
  };
  return (
    <div className="nav-container">
      <nav className="navbar">
        <a href="/">
          <img src="/logo.svg" alt="Contact Button" />
        </a>
        <div className={clicked ? "nav-menu" : "nav-section"}>
          <ul>
            <li>
              <a href="#portfolio-section" onClick={navClick}>My Work</a>
            </li>
            <li>
              <a href="#skill-section" onClick={navClick}>My Skills</a>
            </li>
            <li>
              <a href="mailto: a.reese@me.com" onClick={navClick}>Hire Me</a>
            </li>
          </ul>

        </div>
        <div className="menu" onClick={handleClick}><img src={clicked ? "/close.svg" : "/menu.svg"} alt="menu"/></div>
      </nav>
      <div className="navLinks">
        <ul>
          <li>
            <Link href="https://github.com/LexTRND">
              <img src="/github.svg" alt="github icon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.behance.net/alexisreese">
              <img src="/behance.svg" alt="behance icon" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/alexis-reese-ba98b625/">
              <img src="/linkedin.svg" alt="linkedin icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

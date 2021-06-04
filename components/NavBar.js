import Link from "next/link";
import Image from "next/image";
import React from "react";

export const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">
        <a href="/">
          <img src="/logo.svg" alt="Contact Button" />
        </a>
        <div className="nav-section">
          <ul>
            <li>
              <a href="#portfolio-section">My Work</a>
            </li>
            <li>
              <a href="#skill-section">My Skills</a>
            </li>
            <li>
              <a href="mailto: a.reese@me.com">Hire Me</a>
            </li>
          </ul>
        </div>
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

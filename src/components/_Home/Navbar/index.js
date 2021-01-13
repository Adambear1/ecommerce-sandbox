import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link">
              <Link
                activeClass="active"
                to="tropical"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={1000}
                delay={200}
                isDynamic={true}
              >
                Tropical
              </Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <Link
                activeClass="active"
                to="arctic"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={1000}
                delay={200}
                isDynamic={true}
              >
                Arctic
              </Link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <Link
                activeClass="active"
                to="moderate"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={1000}
                delay={200}
                isDynamic={true}
              >
                Moderate
              </Link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

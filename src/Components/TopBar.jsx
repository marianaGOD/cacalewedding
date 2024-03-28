import React from "react";
import StoryPage from "../Pages/StoryPage";
import { useNavigate, Link } from "react-router-dom";
import titleImg from "../assets/images/lavanda.png";
import lettering from "../assets/images/lettering.png";

export default function TopBar() {
  const nav = useNavigate();
  return (
    <div id="mainNavigation">
      <nav role="navigation">
        <div className="py-3 text-center border-bottom">
          <img
            src={lettering}
            alt=""
            className="invert"
            style={{ height: "100px" }}
          />
        </div>
      </nav>
      <div className="navbar-expand-md">
        <div className="navbar-dark text-center my-2">
          <button
            className="navbar-toggler w-75"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>{" "}
            <span className="align-middle">Menu</span>
          </button>
        </div>
        <div
          className="text-center mt-3 collapse navbar-collapse"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/historia" className="nav-link">
                A Nossa História
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dia" className="nav-link">
                O Grande Dia
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mais" className="nav-link">
                Saber Mais
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import StoryPage from "../Pages/StoryPage";
import { useNavigate } from "react-router-dom";
import titleImg from "../assets/images/lavanda.png";
import alianca from "../assets/images/aliança.png";

export default function TopBar() {
  const nav = useNavigate();
  return (
    <div className="top-container">
      <div className="logo-container">
      </div>
      <div className="button-container">
        <button className="top-buttons" onClick={() => nav("/historia")}>
          A Nossa História
        </button>
        <button className="top-buttons" onClick={() => nav("/dia")}>
          O Grande Dia
        </button>
      </div>
    </div>
  );
}

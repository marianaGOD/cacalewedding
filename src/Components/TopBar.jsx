import React from "react";
import StoryPage from "../Pages/StoryPage";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const nav = useNavigate();
  return (
    <div className="buttons-container">
      <button className="top-buttons" onClick={() => nav("/historia")}>
        A Nossa História
      </button>
      <button className="top-buttons" onClick={() => nav("/dia")}>
        O Grande Dia
      </button>
    </div>
  );
}

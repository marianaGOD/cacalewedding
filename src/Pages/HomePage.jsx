import React from "react";
import raminhos from "../assets/images/raminhos.png";
import Countdown from "react-countdown";

export default function HomePage() {
  // Calculate the target date
  const currentDate = new Date();
  const year =
    currentDate.getMonth() > 8
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear(); // If it's past September, count down to next year
  const targetDate = new Date(year, 8, 7); // Month is 0-indexed, 8 = September

  return (
    <div className="homepage-container">
      <div className="title-container">
        <img src={raminhos} alt="raminhos" style={{ height: "200px" }} />
        <br />
        <Countdown date={targetDate} />
        <br />
      </div>
      <button className="rsvp-button">Confirmar Presença</button>
    </div>
  );
}

import React from "react";
import raminhos from "../assets/images/raminhos.png";
import Countdown from "react-countdown";

export default function HomePage() {
  // Set the date we're counting down to
  var countDownDate = new Date("Sept 7, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Find the time remaining between now and the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes and seconds remaining
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML =
      days +
      " dias " +
      hours +
      " horas " +
      minutes +
      " minutos " +
      seconds +
      " segundos ";

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div className="homepage-container">
      <div className="title-container">
        <img src={raminhos} alt="raminhos" style={{ height: "200px" }} />
        <br />
        <div class="countdown" id="countdown"></div>
        <br />
      </div>
      <button className="rsvp-button">Confirmar Presença</button>
    </div>
  );
}

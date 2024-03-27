import React from "react";
import Countdown from "react-countdown";

// Renderer function to display the countdown
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <div>Countdown completed!</div>;
  } else {
    // Render a countdown
    return (
      <div>
        <p>Time left until September 7:</p>
        <p>
          {days} days {hours} hours {minutes} minutes {seconds} seconds
        </p>
      </div>
    );
  }
};

export default function CustomCountdown() {
  // Calculate the target date
  const currentDate = new Date();
  const year =
    currentDate.getMonth() > 8
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear(); // If it's past September, count down to next year
  const targetDate = new Date(year, 8, 7); // Month is 0-indexed, 8 = September

  return (
    <div>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
}

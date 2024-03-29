import React, { useState } from "react";
import raminhos from "../assets/images/raminhos.png";
import CustomCountdown from "../Components/Countdown";
import { Drawer } from "antd";

export default function HomePage() {
  const [isOpen, setOpen] = useState(false);
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
        <CustomCountdown date={targetDate} />
        <br />
      </div>
      <button className="rsvp-button" onClick={() => setOpen(true)}>
        Confirmar Presença
      </button>

      <Drawer
        title="Survey"
        placement="right"
        onClose={() => setOpen(false)}
        open={isOpen}
        size="large"
      >
        <iframe
          title="Survey"
          src="https://w9vs6ivp.forms.app/cale-wedding-test"
          style={{
            width: "100%",
            height: "calc(100% - 3px)",
            overflow: "hidden",
          }}
        >
          Loading…
        </iframe>
      </Drawer>
    </div>
  );
}

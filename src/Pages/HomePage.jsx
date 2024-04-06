import React, { useState } from "react";
import raminhos from "../assets/images/raminhos.png";
import CustomCountdown from "../Components/Countdown";
import { Drawer } from "antd";

// https://w9vs6ivp.forms.app/cale-wedding-test
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
      <div className="rsvp-container">
        <p>7 de Setembro de 2024</p>
        <button className="rsvp-button" onClick={() => setOpen(true)}>
          Confirmar Presença
        </button>
      </div>
      <Drawer
        placement="bottom"
        onClose={() => setOpen(false)}
        open={isOpen}
        size="large"
      >
        <iframe
          title="Survey"
          src="https://docs.google.com/forms/d/e/1FAIpQLScoHvNik1RcgfgaKTbwbYYfdQVm9brZjrB4ErX2REgZ3eqc1Q/viewform"
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

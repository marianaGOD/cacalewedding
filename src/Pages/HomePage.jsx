import React from "react";
import titleImg from "../assets/images/lavanda.png";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <div className="title-container">
        <img className="lavanda-img" src={titleImg} alt="" />
        <p>Catarina & Alexandre</p>

        <p>7 de Setembro de 2024</p>
      </div>

      <div className="announcement-container">
        Comunicação
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          aliquam quo animi! Quaerat error provident soluta delectus quia harum
          dolor velit, omnis ex veniam! Iste harum non consectetur minima
          inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis cum ab placeat, accusantium inventore tempora debitis amet
          sequi recusandae sed cupiditate eos velit odio eaque nobis ut, quia
          cumque quasi. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Earum quia, provident a fugiat eius asperiores veniam tempora
          aliquam repudiandae quas repellat, maxime voluptates itaque corrupti
          placeat voluptatibus temporibus omnis ad?
        </p>
      </div>
      
    </div>
  );
}

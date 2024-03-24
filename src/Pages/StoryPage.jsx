import React from 'react'
import ph2014 from "../assets/images/2014.jpeg";
import ph2015 from "../assets/images/2015.jpeg";
import ph2016 from "../assets/images/2016.jpeg";
import ph2017 from "../assets/images/2017.jpeg";
import ph2018 from "../assets/images/2018.jpeg";
import ph2019 from "../assets/images/2019.jpeg";
import ph2020 from "../assets/images/2020.jpeg";
import ph2021 from "../assets/images/2021.jpeg";
import ph2022 from "../assets/images/2022.jpeg";
import ph2023 from "../assets/images/2023.jpeg";


export default function StoryPage() {
  return (
    <div className="picture-container">
      <p>A nossa história</p>
      <img src={ph2014} alt="photo 2014" />
      <img src={ph2015} alt="photo 2015" />
      <img src={ph2016} alt="photo 2016" />
      <img src={ph2017} alt="photo 2017" />
      <img src={ph2018} alt="photo 2018" />
      <img src={ph2019} alt="photo 2019" />
      <img src={ph2020} alt="photo 2020" />
      <img src={ph2021} alt="photo 2021" />
      <img src={ph2022} alt="photo 2022" />
      <img src={ph2023} alt="photo 2023" />
    </div>
  );
}

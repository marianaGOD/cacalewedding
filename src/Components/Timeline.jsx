import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const years = [
    { year: 2014, image: ph2014, text: "Your text for 2014" },
    { year: 2015, image: ph2015, text: "Your text for 2015" },
    { year: 2016, image: ph2016, text: "Your text for 2016" },
    { year: 2017, image: ph2017, text: "Your text for 2017" },
    { year: 2018, image: ph2018, text: "Your text for 2018" },
    { year: 2019, image: ph2019, text: "Your text for 2019" },
    { year: 2020, image: ph2020, text: "Your text for 2020" },
    { year: 2021, image: ph2021, text: "Your text for 2021" },
    { year: 2022, image: ph2022, text: "Your text for 2022" },
    { year: 2023, image: ph2023, text: "Your text for 2023" },
    // Continue with the pattern for the rest of the years you want to include
  ];

  return (
    <div
      className="timeline"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      {years.map(({ year, image, text }) => (
        <div key={year} className="timeline-item">
          <div className="timeline-content">
            <img src={image} alt={`photo ${year}`} />
            <div className="year-cont">
              <strong>{year}</strong>
            </div>
            <div className="text-cont">{text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;

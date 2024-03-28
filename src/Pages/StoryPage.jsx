import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function StoryPage() {
  const slidesData = [
    {
      year: "2011",
      title: "Our nice super title",
      text: "Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do eiusmod tempor incididut ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://unsplash.it/1920/500?image=11",
    },
    // Repeat for other years or generate similarly structured objects
  ];

  return (
    <div className="container">
      <h1 className="title">Responsive Slider Timeline</h1>
      <div className="timeline">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
              }}
            >
              <div className="swiper-slide-content">
                <span className="timeline-year">{slide.year}</span>
                <h4 className="timeline-title">{slide.title}</h4>
                <p className="timeline-text">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

//<img src={ph2014} alt="photo 2014" />
//<img src={ph2015} alt="photo 2015" />
//<img src={ph2016} alt="photo 2016" />
//<img src={ph2017} alt="photo 2017" />
//<img src={ph2018} alt="photo 2018" />
//<img src={ph2019} alt="photo 2019" />
//<img src={ph2020} alt="photo 2020" />
//<img src={ph2021} alt="photo 2021" />
//<img src={ph2022} alt="photo 2022" />
//<img src={ph2023} alt="photo 2023" />

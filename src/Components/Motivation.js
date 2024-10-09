import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
// Import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation"; // This import can be removed if you're hiding navigation
import "swiper/css/pagination";
import img1 from "../assets/img2.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
const Motivation = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Autoplay],
      direction: "horizontal",
      loop: true,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: false,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="  shadow-2xl shadow-white">
      <h1 className="bold items-center">AAJ KI MOTIVATION</h1>
      <div className="swiper m-4">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={img1} />
          </div>
          <div className="swiper-slide">
            <img src={img2} />
          </div>
          <div className="swiper-slide">
            <img src={img3} />
          </div>
          <div className="swiper-slide">
            <img src={img4} />
          </div>
          <div className="swiper-slide">
            <img src={img5} />
          </div>
          <div className="swiper-slide">
            <img src={img6} />
          </div>
          <div className="swiper-slide">
            <img src={img7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Motivation;

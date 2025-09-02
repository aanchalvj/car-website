import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import car1 from "../assets/car img.jpg";
import car2 from "../assets/car.jpg";
import car3 from "../assets/bg2.jpg";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { arrows: false, dots: true },
      },
      {
        breakpoint: 768,
        settings: { arrows: false, dots: true },
      },
    ],
  };

  return (
    <section className="bg-slate-950 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-40 min-h-screen flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500 font-serif leading-snug">
            Welcome To <br />
            <span className="text-white">Sawariya Car Decor</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed">
            At <span className="text-yellow-400 font-semibold">Sawariya Car Decor</span>,
            we transform your car into a luxurious space. From elegant interiors 
            to top-quality accessories — experience a new level of comfort, style, 
            and performance. 🚗✨
          </p>

          {/* Expanded Features */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
            <div className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✅</span>
              <p className="text-gray-300 text-sm sm:text-base">Custom leather & fabric seat covers</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✅</span>
              <p className="text-gray-300 text-sm sm:text-base">Ambient LED lighting for interiors</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✅</span>
              <p className="text-gray-300 text-sm sm:text-base">High-quality floor mats & carpets</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✅</span>
              <p className="text-gray-300 text-sm sm:text-base">Car audio and stereo system upgrades</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✅</span>
              <p className="text-gray-300 text-sm sm:text-base">Personalized accessories & trims</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-500 text-xl">✅</span>
              <p className="text-gray-300 text-sm sm:text-base">Premium exterior styling & wraps</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <a
              href="#services"
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="border border-yellow-500 text-yellow-500 px-6 py-3 rounded-xl hover:bg-yellow-500 hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="relative flex justify-center">
          <Slider
            {...settings}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-2xl"
          >
            <div>
              <img src={car1} alt="Car Decor 1" className="rounded-2xl w-full object-cover" />
            </div>
            <div>
              <img src={car2} alt="Car Decor 2" className="rounded-2xl w-full object-cover" />
            </div>
            <div>
              <img src={car3} alt="Car Decor 3" className="rounded-2xl w-full object-cover" />
            </div>
          </Slider>
          <div className="absolute -bottom-6 -z-10 w-4/5 h-4/5 bg-yellow-500 blur-3xl opacity-20 rounded-full"></div>
        </div>
      </div>

      {/* Optional: Highlight Section Below Slider */}
      <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-yellow-500 font-bold text-2xl">🚗</p>
          <h4 className="text-white font-semibold mt-2 mb-1">Luxury Interiors</h4>
          <p className="text-gray-400 text-sm">Premium design & comfort for every car.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-yellow-500 font-bold text-2xl">🎵</p>
          <h4 className="text-white font-semibold mt-2 mb-1">Audio Upgrade</h4>
          <p className="text-gray-400 text-sm">High-quality stereo & sound system options.</p>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <p className="text-yellow-500 font-bold text-2xl">✨</p>
          <h4 className="text-white font-semibold mt-2 mb-1">Exterior Styling</h4>
          <p className="text-gray-400 text-sm">Custom wraps, decals, and trims for your car.</p>
        </div>
      </div>
    </section>
  );
}

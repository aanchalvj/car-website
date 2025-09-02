// src/components/Services.jsx
import React from "react";

const pinterestEmbeds = [
  {
    id: 1,
    src: "https://assets.pinterest.com/ext/embed.html?id=111816003245320032",
    title: "LED Ambient Lighting",
  },
  {
    id: 2,
    src: "https://assets.pinterest.com/ext/embed.html?id=1688918606320878",
    title: "Stereo System Upgrade",
  },
  {
    id: 3,
    src: "https://assets.pinterest.com/ext/embed.html?id=10836855346809255",
    title: "Gayer Car Wrap",
  },
  {
    id: 4,
    src: "https://assets.pinterest.com/ext/embed.html?id=3166662232979498",
    title: "Steering Wheel Cover",
  },
  {
    id: 5,
    src: "https://assets.pinterest.com/ext/embed.html?id=1618549863459187",
    title: "Seat Covers",
  },
  {
    id: 6,
    src: "https://assets.pinterest.com/ext/embed.html?id=1023654190288773441",
    title: "Floor Mats",
  },
  
];

export default function Services() {
  return (
    <section className="bg-slate-950 text-white py-16 px-6 md:px-20 lg:px-32" id="services">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-serif">
          Our <span className="text-white">Services</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Explore our car decoration, & accessories.
        </p>
      </div>

      {/* Pinterest Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pinterestEmbeds.map((pin) => (
          <div
            key={pin.id}
            className="relative rounded-xl overflow-hidden shadow-lg bg-slate-900"
          >
            <iframe
              src={pin.src}
              title={pin.title}
              frameBorder="0"
              scrolling="no"
              className="w-full h-64 sm:h-80 md:h-96"
            ></iframe>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">{pin.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";

// ✅ Product images import
import img1 from "../assets/seatcover.jpeg";
import img2 from "../assets/staringcover.jpg";
import img3 from "../assets/armrest.jpg";
import img4 from "../assets/interiorlights.jpg";
import img5 from "../assets/floormate.jpg";
import img9 from "../assets/curtaincover.jpg";
import img10 from "../assets/headlights.jpg";
import img12 from "../assets/phoneholder.jpg";

// ✅ Products array with descriptions
const products = [
  { 
    id: 1, 
    img: img1, 
    title: "Luxury Seat Covers", 
    desc: "Premium quality seat covers that add comfort and elegance to your car." 
  },
  { 
    id: 2, 
    img: img2, 
    title: "Steering Cover", 
    desc: "Stylish steering wheel covers for better grip and a luxury look." 
  },
  { 
    id: 3, 
    img: img3, 
    title: "Armrest", 
    desc: "Durable and comfortable armrests for a relaxed driving experience." 
  },
  { 
    id: 4, 
    img: img4, 
    title: "LED Ambient Lights", 
    desc: "Modern LED lights to brighten and enhance your car’s interiors." 
  },
  { 
    id: 5, 
    img: img5, 
    title: "Floor Mats", 
    desc: "Custom-fit floor mats that keep your car’s interior clean and stylish." 
  },
  { 
    id: 9, 
    img: img9, 
    title: "Curtain Cover", 
    desc: "Elegant curtain covers for privacy and protection from sunlight." 
  },
  { 
    id: 10, 
    img: img10, 
    title: "Head Lights", 
    desc: "High-performance headlights for clear vision and safety on the road." 
  },
  { 
    id: 12, 
    img: img12, 
    title: "Phone Holder", 
    desc: "Adjustable car phone holders for safe and easy navigation." 
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 md:px-20 lg:px-32">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 font-serif">
          Our <span className="text-white">Projects</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          A glimpse of our latest car decor and customization projects.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-slate-900 hover:shadow-yellow-500/30 transition-shadow duration-500"
          >
            {/* Image */}
            <div className="w-full h-64 sm:h-60 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Overlay with Title (desktop hover only) */}
            <div className="absolute inset-0 hidden md:flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-400 text-center px-2">
                {product.title}
              </h3>
            </div>

            {/* Border bottom animation */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

            {/* Details section (always visible) */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                {product.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

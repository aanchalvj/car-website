import React from "react";
import aboutImg from "../assets/BMW.jpg";
import { CheckCircle, Star, Heart, Users, Award } from "lucide-react";

// Brand logos import
import kia from "../assets/KIA.jpg";
import maruti from "../assets/SUZUKI.jpg";
import tata from "../assets/TATA.jpg";
import nissan from "../assets/NISSAN.jpg";
import audi from "../assets/OOO.jpg";
import mercedes from "../assets/MERSEDES.jpg";
import hyundai from "../assets/Hyundai.jpg";
import ford from "../assets/Ford.jpg";
import jaguar from "../assets/Jaguar.jpg";
import lamborgini from "../assets/Lamborghini.jpg";
import skoda from "../assets/SKODA.jpg";
import Porsche from "../assets/PORSCHE.jpg";
import citroen from "../assets/CITROEN.jpg";
import volvo from "../assets/VOLVO.jpg";
import jeep from "../assets/ZEEP.jpg";
import toyato from "../assets/TOYATO.jpg";
import bentely from "../assets/BENTELY.jpg";
import renault from "../assets/RENAULT.jpg";

// Brand logos array
const brands = [
  kia, maruti, tata, nissan,
  audi, mercedes, hyundai, ford, jaguar,
  lamborgini, skoda, Porsche, citroen, volvo,
  jeep, toyato, bentely, renault,
];

export default function About() {
  return (
    <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500 font-serif">
          About <span className="text-white">Sawariya Car Decor</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Transforming your driving experience with world-class car interiors,
          stylish accessories, and premium comfort. 🚗✨
        </p>
      </div>

      {/* Image + Content */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="relative flex justify-center">
          <img
            src={aboutImg}
            alt="Sawariya Car Decor"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl transform hover:scale-105 transition duration-500"
          />
          <div className="absolute bottom-0 w-2/3 sm:w-3/4 h-6 bg-yellow-500/30 blur-2xl rounded-full"></div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
            Sawariya Car Decor, based in{" "}
            <span className="text-yellow-400 font-semibold">Kota, Rajasthan</span>,
            is your ultimate destination for car interior styling, comfort upgrades, 
            and personalized accessories. Our passion is making every ride luxurious 
            and unique for our clients.
          </p>

          <ul className="space-y-4 text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-yellow-500 mt-1" />
              <span>High-quality seat covers, mats & luxury car accessories.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-yellow-500 mt-1" />
              <span>Expert team with years of experience in car customization.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-yellow-500 mt-1" />
              <span>Affordable pricing with top-notch finishing.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* History Section */}
      <div className="mt-16 text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
          Our Journey
        </h3>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Since our inception, Sawariya Car Decor has grown into one of Kota's most
          trusted car decor brands. From humble beginnings to becoming a recognized
          name in luxury car interiors, our journey has been fueled by passion, 
          creativity, and dedication to quality.
        </p>
      </div>

      {/* Services Offered */}
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <Star className="mx-auto text-yellow-500 mb-4" size={36} />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Interior Styling</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            Premium seat covers, dashboard wraps, ambient lighting, and full interior customization.
          </p>
        </div>
        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <Heart className="mx-auto text-yellow-500 mb-4" size={36} />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Accessories</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            Steering covers, floor mats, cushions, gadgets, and personalized accessories for every car.
          </p>
        </div>
        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <CheckCircle className="mx-auto text-yellow-500 mb-4" size={36} />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Luxury Upgrades</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            High-end audio, leather interiors, ambient lighting, and unique design enhancements.
          </p>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="mt-16">
        <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
          What Our Customers Say
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <Users className="mx-auto text-yellow-500 mb-4" size={36} />
            <p className="text-gray-400 text-sm sm:text-base">
              "Absolutely love my new car interior! Professional and efficient service."
            </p>
            <p className="mt-2 font-semibold text-yellow-400">— Rajesh K.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <Users className="mx-auto text-yellow-500 mb-4" size={36} />
            <p className="text-gray-400 text-sm sm:text-base">
              "The seat covers and mats are top-notch quality. Highly recommended!"
            </p>
            <p className="mt-2 font-semibold text-yellow-400">— Pooja S.</p>
          </div>
          <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <Users className="mx-auto text-yellow-500 mb-4" size={36} />
            <p className="text-gray-400 text-sm sm:text-base">
              "Professional team, great design ideas, and flawless installation."
            </p>
            <p className="mt-2 font-semibold text-yellow-400">— Vikram L.</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <CheckCircle className="mx-auto text-yellow-500 mb-4" size={36} />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Expert Team</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            Experienced professionals delivering high-quality craftsmanship.
          </p>
        </div>
        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <Award className="mx-auto text-yellow-500 mb-4" size={36} />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Trusted & Reliable</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            Trusted by seven hundreds of satisfied customers in Kota and beyond.
          </p>
        </div>
        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition">
          <Heart className="mx-auto text-yellow-500 mb-4" size={36} />
          <h4 className="text-lg sm:text-xl font-semibold mb-2">Affordable Luxury</h4>
          <p className="text-gray-400 text-sm sm:text-base">
            Premium services at competitive prices, making luxury accessible.
          </p>
        </div>
      </div>

      {/* Brand Logos Continuous Scrolling */}
      <div className="mt-20 space-y-10">
        <h3 className="font-serif text-center text-xl sm:text-2xl md:text-5xl font-bold text-yellow-500">
          Brands
        </h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee space-x-8 sm:space-x-12 w-max">
            {brands.concat(brands).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Brand Logo"
                className="w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex animate-marquee-reverse space-x-8 sm:space-x-12 w-max">
            {brands.concat(brands).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Brand Logo"
                className="w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

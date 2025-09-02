// src/components/Footer.jsx
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-gray-300 pt-12 pb-6 px-6 md:px-20 lg:px-32">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 font-serif mb-4">
            Sawariya Car Decor
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We provide premium car decoration and detailing services to make
            your ride stand out with style and elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["home", "about", "projects", "services", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleScroll(e, section)}
                  className="hover:text-yellow-500 transition capitalize"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact Info
          </h3>
          <ul className="space-y-3">
            {/* Phone */}
            <li className="flex flex-wrap items-center gap-2">
              <Phone className="text-yellow-500 w-5 h-5 flex-shrink-0" />
              <a href="tel:+917014893891" className="hover:text-yellow-500 transition">
                +91 7014893891
              </a>
              <span>,</span>
              <a href="tel:+919772424688" className="hover:text-yellow-500 transition">
                9772424688
              </a>
              <span>,</span>
              <a href="tel:+918209046487" className="hover:text-yellow-500 transition">
                8209046487
              </a>
            </li>

            {/* Email */}
            <li className="flex flex-wrap items-center gap-2">
              <Mail className="text-yellow-500 w-5 h-5 flex-shrink-0" />
              <a
                href="mailto:sawariyacardecor65@gmail.com"
                className="hover:text-yellow-500 transition"
              >
                sawariyacardecor65@gmail.com
              </a>
              <span>,</span>
              <a
                href="mailto:ankitvv2424@gmail.com"
                className="hover:text-yellow-500 transition"
              >
                ankitvv2424@gmail.com
              </a>
            </li>

            {/* Address */}
            <li className="flex items-start gap-2">
              <MapPin className="text-yellow-500 w-5 h-5 flex-shrink-0 mt-1" />
              <span>Near Shopping Center, Ajeet Restaurant, Kota, Rajasthan</span>
            </li>

            {/* WhatsApp */}
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-green-500 w-5 h-5 flex-shrink-0" />
              <a
                href="https://wa.me/919772426288"
                target="_blank"
                rel="noreferrer"
                className="hover:text-yellow-500 transition"
              >
                +91 9772426288 (WhatsApp)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 md:gap-0">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.youtube.com/@sawariyacardecoryt"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 hover:bg-red-600 hover:text-black p-2 rounded-full transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/sawariya_car_decor"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 hover:bg-pink-500 hover:text-black p-2 rounded-full transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/919772426288"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 hover:bg-green-500 hover:text-black p-2 rounded-full transition"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Sawariya Car Decor. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

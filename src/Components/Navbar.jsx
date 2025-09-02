import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/car logo2.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["home", "about", "projects", "services", "contact"];

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#home" onClick={(e) => handleScroll(e, "home")} className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="Logo" className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-yellow-500 hover:scale-105 transition-transform" />
          <h1 className="text-lg md:text-2xl font-bold font-serif text-yellow-500">Sawariya Car Decor</h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item}`}
              onClick={(e) => handleScroll(e, item)}
              className="text-white hover:text-yellow-500 transition font-medium"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-black/95 text-white flex flex-col items-center gap-6 py-6 transition-all duration-500 z-40 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={`#${item}`}
            onClick={(e) => handleScroll(e, item)}
            className="hover:text-yellow-500 font-medium text-lg transition"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </header>
  );
}

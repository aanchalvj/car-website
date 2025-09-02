import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ndsjy22",
        "template_2wpypve",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to_email: "sawariyacardecor65@gmail.com",
        },
        "0QRd6R3sem7MhXWki"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Message failed to send ❌");
        }
      );
  };

  //  Contact details arrays
  const phoneNumbers = ["+91 7014893891", "+91 9772424688", "+91 8209046487"];
  const emails = ["sawariyacardecor65@gmail.com", "ankitvv2424@gmail.com"];
  const whatsappNumbers = ["+91 9772424688"];
  const address = "Near Shopping Center, Ajeet Restaurant, Kota, Rajasthan";

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-16 px-6 md:px-20 lg:px-32"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 font-serif">
          Contact <span className="text-white">Us</span>
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Have any questions or want to book our services? Feel free to reach
          out!
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          {/* Phones */}
          <div className="flex flex-col gap-2 p-4 rounded-xl bg-slate-900 hover:bg-slate-800 transition shadow-lg hover:shadow-yellow-500/20">
            <Phone className="text-yellow-500 w-6 h-6" />
            {phoneNumbers.map((num, index) => (
              <a
                key={index}
                href={`tel:${num.replace(/\s+/g, "")}`}
                className="text-gray-300 hover:text-yellow-500 transition"
              >
                {num}
              </a>
            ))}
          </div>

          {/* Emails */}
          <div className="flex flex-col gap-2 p-4 rounded-xl bg-slate-900 hover:bg-slate-800 transition shadow-lg hover:shadow-yellow-500/20">
            <Mail className="text-yellow-500 w-6 h-6" />
            {emails.map((email, index) => (
              <a
                key={index}
                href={`mailto:${email}`}
                className="text-gray-300 hover:text-yellow-500 transition"
              >
                {email}
              </a>
            ))}
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col gap-2 p-4 rounded-xl bg-slate-900 hover:bg-slate-800 transition shadow-lg hover:shadow-green-500/20">
            <MessageCircle className="text-green-500 w-6 h-6" />
            {whatsappNumbers.map((num, index) => (
              <a
                key={index}
                href={`https://wa.me/${num.replace(/\+| /g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition"
              >
                WhatsApp: {num}
              </a>
            ))}
          </div>

          {/* Address */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900 hover:bg-slate-800 transition shadow-lg hover:shadow-yellow-500/20">
            <MapPin className="text-yellow-500 w-6 h-6" />
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(
                address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              {address}
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 rounded-xl shadow-lg p-6 space-y-4 hover:shadow-yellow-500/20 transition"
        >
          <div>
            <label className="block mb-1 text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Type your message..."
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105"
          >
            Send Message <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="bg-slate-900 p-8 rounded-xl shadow-lg w-full max-w-md z-10 relative">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center font-serif">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-yellow-500 outline-none"
              autoComplete="off"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

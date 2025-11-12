import React, { useState } from "react";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/mldaeavd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Something went wrong. Try again later.");
    }
  };

  return (
    <section id="contact">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md px-9 md:px-8">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-xl font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                         focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                       focus:outline-none hover:bg-orange-600 
                       hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] 
                       rounded-full text-lg transition-all duration-300"
          >
            Send Message
          </button>

          {/* Status Message */}
          <p className="text-center text-white mt-2">{status}</p>
        </form>
      </div>
    </section>
  );
}

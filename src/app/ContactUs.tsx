"use client";

import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="ContactUs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 md:text-left text-center">Contact Us</h2>

        {/* Use flex-col on mobile and flex-row on md+ */}
        {/* Remove items-center so content can stretch to full width on mobile */}
        <div className="flex flex-col md:flex-row">
          {/* Map iframe */}
          <div className="relative w-full md:w-1/2 h-64 md:h-96 mb-10 md:mb-0">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.68438227442!2d39.122592375271395!3d21.559193080226198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfb38f39fa2b%3A0xe08fde489e8a7272!2sKing%20Road%20Tower!5e0!3m2!1sen!2ssa!4v1739948517222!5m2!1sen!2ssa"
               // arabic version of map below
        // https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.6843817684403!2d39.125167299999994!3d21.5591931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfb38f39fa2b%3A0xe08fde489e8a7272!2z2KjYsdisINin2YTYtNin2LTYqQ!5e0!3m2!1sar!2seg!4v1694959092009!5m2!1sar!2seg
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Form */}
          {/* w-full for mobile, md:w-1/2 for larger screens */}
          <div className="w-full md:w-1/2 md:pl-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white font-bold py-2 px-4 rounded-lg border border-[#406D77] hover:bg-white hover:text-[#406D77] transition duration-300 bg-[#406D77] "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

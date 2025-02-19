"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

// Main menu items that collapse on mobile
const collapsibleItems = [
  { title: "About", href: "#About" },
  { title: "Services", href: "#services" },
  { title: "Contact", href: "#ContactUs" },
];

// “عربي” is always visible
const arabicLink = { title: "عربي", href: "#Carousel" };

// Smooth scrolling handler
function handleScrollTo(id: string) {
  const section = document.querySelector(id);
  if (!section) return;

  const targetY = section.getBoundingClientRect().top + window.pageYOffset;
  animate(window.scrollY, targetY, {
    duration: 0.7,
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="mx-[5vw]">
        <div className="flex items-center justify-between py-2">
          {/* Logo on the left */}
          <a className="flex items-center px-2">
            <img
              className="md:w-[150px] w-[90px]"
              src="nejad_logo.png"
              alt="Nejad Logo"
            />
          </a>

          {/* Right side container (desktop items + عربي + phone + hamburger) */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* DESKTOP: collapsible items (hidden on mobile) */}
            <div className="hidden md:flex items-center space-x-5">
              {collapsibleItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => handleScrollTo(item.href)}
                  className="brownColor font-semibold hover:text-cyan-700 transition duration-300"
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* “عربي” (always visible) */}
            <button
              onClick={() => handleScrollTo(arabicLink.href)}
              className="brownColor font-semibold hover:text-cyan-700 transition duration-300"
            >
              {arabicLink.title}
            </button>

            {/* Phone icon (always visible) - use `a` with `tel:+...` */}
            <a
              href="tel:+9660570095550"
              className="brownColor hover:text-cyan-700 transition duration-300"
            >
              <Phone size={24} />
            </a>

            {/* Hamburger button (only visible on mobile) */}
            <button
              className="brownColor md:hidden outline-none border rounded p-2 hover:bg-text-cyan-700 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown (collapsible items) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-3 pt-2 pb-3 space-y-1">
              {collapsibleItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollTo(item.href);
                  }}
                  className="brownColor block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-cyan-700 hover:bg-gray-50"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

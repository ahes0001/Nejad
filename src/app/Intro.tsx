"use client";
import type React from "react"
import { motion } from "framer-motion"

const Intro: React.FC = () => {
  return (
    <section id= "Home" className="mx-5">
      <div className=" hero container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 md:pr-10"
        >
          <h1 className="text-4xl text-white font-bold mb-4">Nejad lawfirm and Legal Consultations</h1>
          <p className="text-xl text-white">Discover amazing services and products.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Intro


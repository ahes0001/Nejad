"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define a type for each service item
type ServiceItem = {
  title: string;
  description: string;
  category: "Judicial services" | "Judicial field" | "Legal services";
};

// Full list of services, each with a short description + category
const services: ServiceItem[] = [
  // -- Judicial services (10)
  {
    title: "Providing Sharia and legal advices",
    description: "Expert guidance on Sharia and legal matters.",
    category: "Judicial services",
  },
  {
    title: "Preparing studies of legal effects and positions",
    description: "Analysis of legal positions and likely outcomes.",
    category: "Judicial services",
  },
  {
    title: "Studying and drafting contracts and agreements",
    description: "Ensuring robust and compliant contracts.",
    category: "Judicial services",
  },
  {
    title: "Establishing companies",
    description: "Support in forming and structuring new companies.",
    category: "Judicial services",
  },
  {
    title: "Legal representation with others, locally and internationally",
    description: "Representation across various jurisdictions.",
    category: "Judicial services",
  },
  {
    title: "Governance and commercial franchise contracts",
    description: "Drafting and advising on governance and franchise deals.",
    category: "Judicial services",
  },
  {
    title: "Registration of intellectual property and patents",
    description: "Securing IP rights and patent registrations.",
    category: "Judicial services",
  },
  {
    title: "Preparing and drafting policies, procedures, and internal regulations",
    description: "Creating effective organizational guidelines.",
    category: "Judicial services",
  },
  {
    title: "Reconciliation and settling disputes by alternative means",
    description: "Mediation and alternative dispute resolution.",
    category: "Judicial services",
  },
  {
    title: "Drafting deeds of endowments and wills",
    description: "Expertly prepared endowment deeds and wills.",
    category: "Judicial services",
  },

  // -- Judicial field (12)
  {
    title: "Commercial lawsuits",
    description: "Representation in commercial litigation and disputes.",
    category: "Judicial field",
  },
  {
    title: "Cases of financial market crimes",
    description: "Handling regulatory and criminal charges in finance.",
    category: "Judicial field",
  },
  {
    title: "Real estate cases",
    description: "Resolving real estate–related legal issues.",
    category: "Judicial field",
  },
  {
    title: "Customs cases",
    description: "Navigating customs regulations and disputes.",
    category: "Judicial field",
  },
  {
    title: "Zakat and tax cases",
    description: "Guidance and representation in taxation matters.",
    category: "Judicial field",
  },
  {
    title: "Inheritance cases",
    description: "Settlement and distribution of estates.",
    category: "Judicial field",
  },
  {
    title: "Financial cases",
    description: "Handling debt collection, loans, and other financial issues.",
    category: "Judicial field",
  },
  {
    title: "Criminal cases",
    description: "Defense and prosecution support in criminal law.",
    category: "Judicial field",
  },
  {
    title: "Banking and financing dispute cases",
    description: "Addressing banking law and finance disagreements.",
    category: "Judicial field",
  },
  {
    title: "Administrative cases",
    description: "Representation in disputes involving government bodies.",
    category: "Judicial field",
  },
  {
    title: "Family cases",
    description: "Legal support for family and domestic relations.",
    category: "Judicial field",
  },
  {
    title: "Labor and laborers cases",
    description: "Workplace disputes and employment law representation.",
    category: "Judicial field",
  },

  // -- Legal services (4)
  {
    title: "Judicial representation before judicial bodies, quasi-judicial committees, and arbitration bodies",
    description: "Advocacy across tribunals and committees.",
    category: "Legal services",
  },
  {
    title: "Studying cases and writing regulations, memorandums, and objection regulations",
    description: "Meticulous case analysis and legal document drafting.",
    category: "Legal services",
  },
  {
    title: "Arbitration locally and internationally",
    description: "Resolving disputes through arbitration procedures.",
    category: "Legal services",
  },
  {
    title: "Judicial implementation of judgments, decisions, and rulings of arbitral tribunals",
    description: "Enforcing arbitral and judicial decisions.",
    category: "Legal services",
  },
];

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "Judicial services" | "Judicial field" | "Legal services"
  >("Judicial services");

  // Filter the services by the currently selected category
  const filteredServices = services.filter(
    (service) => service.category === selectedCategory
  );

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedCategory("Judicial services")}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              selectedCategory === "Judicial services"
                ? "bg-[#406D77] text-white"
                : "bg-white text-[#406D77] border border-[#406D77] hover:bg-[#406D77] hover:text-white"
            }`}
          >
            Judicial services
          </button>
          <button
            onClick={() => setSelectedCategory("Judicial field")}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              selectedCategory === "Judicial field"
                ? "bg-[#406D77] text-white"
                : "bg-white text-[#406D77] border border-[#406D77] hover:bg-[#406D77] hover:text-white"
            }`}
          >
            Judicial field
          </button>
          <button
            onClick={() => setSelectedCategory("Legal services")}
            className={`px-4 py-2 rounded-md font-semibold transition-colors ${
              selectedCategory === "Legal services"
                ? "bg-[#406D77] text-white"
                : "bg-white text-[#406D77] border border-[#406D77] hover:bg-[#406D77] hover:text-white"
            }`}
          >
            Legal services
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title + index}
                layout
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;

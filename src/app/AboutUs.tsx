import type React from "react"

const AboutUs: React.FC = () => {
  return (
    <section id= "About" className="py-20 bg-white-100">
      <div className="container mx-auto px-4">
        <div>
        <h2 className="text-3xl font-bold md:text-left text-center mb-8 ">About Us</h2>
        </div>
        <div>
        <img
      src="about.jpeg"
      alt="Something descriptive"
      className="
        w-full
        mb-4
        rounded-[60px]
        md:w-2/5
        lg:w-[250px]
        
        md:float-right
        md:ml-4
      "
    />
        
        <p className="md:text-left md:align-left text-xl text-gray-600 max-w-3xl text-center">
        Nejad Law Firm was founded in Makkah and expanded to Jeddah, growing across Saudi Arabia and internationally. It brings together experienced lawyers, consultants, and legal assistants across various specialties. With over 15 years of expertise, the firm delivers innovative, high-quality legal solutions beyond traditional frameworks.
        </p>
        </div>
      
      </div>
    </section>
  )
}

export default AboutUs


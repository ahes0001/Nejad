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
        md:w-1/3
        md:float-right
        md:ml-4
      "
    />
        
        <p className="md:text-left md:align-left text-xl text-gray-600 max-w-3xl text-center">
        Nejad lawfirm was established from the heart of the Islamic world, Makkah Al-Mukarramah, until it landed in the province of Jeddah and flourished in all cities of the Kingdom of Saudi Arabia. Its work was not limited to the internal level only, but also expanded by working outside the Kingdom of Saudi Arabia. Nejad lawfirm includes a group of lawyers, consultants and legal assistants in various expertise and specialization. It embodies cadres in the field of law with the aim of offering innovative legal solutions outside the usual frameworks to provide modern legal services at a high quality level. All these amazing achievements are nothing but a result of cumulative professional and academic experiences of more than fifteen years in the field of law.
        </p>
        </div>
      
      </div>
    </section>
  )
}

export default AboutUs


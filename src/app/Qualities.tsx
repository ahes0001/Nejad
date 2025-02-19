import type React from "react"
import { Check } from "lucide-react"

const qualities = ["Innovation", "Quality", "Customer-Focused", "Reliability", "Sustainability", "Expertise"]

const Qualities: React.FC = () => {
  return (
    <section className="py-20 bg-white bbackgorund text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 ">Our Qualities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <div key={index} className="flex items-center">
              <Check className="text-green-500 mr-2" />
              <span className="text-xl">{quality}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Qualities


import Image from 'next/image'
import Navbar from './Navbar'
import Intro from './Intro'
import AboutUs from './AboutUs'
import Qualities from './Qualities'
import Services from './Services'
import ContactUs from './ContactUs'
import Footer from './Footer'
import { CarouselSection } from './carousel-section'

export default function Home() {
  return (
    <main >
     <div className="min-h-screen ">
      <Navbar />
      <Intro />
      <AboutUs />
      <Qualities />
      <Services />
      <CarouselSection />
      <ContactUs />
      <Footer />
    </div>
    </main>
  )
}

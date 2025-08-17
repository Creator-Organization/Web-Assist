import Hero from './components/Hero'
import TechStack from './components/TechStack'
import CloudPlatforms from './components/CloudPlatforms'
import DevelopmentProcess from './components/DevelopmentProcess'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <CloudPlatforms />
      <DevelopmentProcess />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

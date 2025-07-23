import Hero from "./components/Hero"
import About from "./components/About"
import Modalities from "./components/Modalities"
import CHVRunSection from "./components/CHVRunSection" // Importe a nova seção
import Testimonials from "./components/Testimonials"
import Plans from "./components/Plans"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-primary text-white">
      <Hero />
      <About />
      <Modalities />
      <CHVRunSection /> {/* Adicione a nova seção aqui */}
      <Testimonials />
      <Plans />
      <Footer />
    </div>
  )
}

export default App

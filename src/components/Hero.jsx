
import { motion } from "framer-motion"
import Header from "./Header"
import chv1 from "../assets/chv1.png"
import chvv from "../assets/chvv.png"

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center pt-20"
      style={{
        backgroundImage: `url(${chv1})`,
      }}
    >
      <img src="" alt="" />
      <Header />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <motion.img
          src={chvv}
          alt="Complexo CHV Logo"
          className="mx-auto  mb-8 h-24 object-contain"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforme seu corpo, supere seus limites.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-white-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          No Complexo CHV, você encontra a estrutura premium e o suporte que precisa para alcançar seus objetivos.
        </motion.p>
        <motion.a
          href="#plans"
          className="inline-block bg-accent text-primary border border-accent text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-accent-dark transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Conheça Nossos Planos
        </motion.a>
      </div>
    </section>
  )
}

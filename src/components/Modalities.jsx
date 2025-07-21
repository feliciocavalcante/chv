
import { motion } from "framer-motion"
import run from "../assets/run.png"
import perfomace from "../assets/perfomace.png"
import funcional from "../assets/funcional.png"
import crosfite from "../assets/crosfite.png"

const modalities = [
  {
    name: "Crossfit",
    description: "Treinamento funcional de alta intensidade para força e condicionamento.",
    image: crosfite,
    isNew: false,
  },
  {
    name: "Performance",
    description: "Otimize seu desempenho atlético com treinos personalizados e avançados.",
    image: perfomace,
    isNew: false,
  },
  {
    name: "Funcional",
    description: "Melhore sua mobilidade e força para as atividades do dia a dia.",
    image: funcional,
    isNew: false,
  },
  
  {
    name: "CHV Run",
    description: "Prepare-se para correr mais longe e mais rápido com nosso programa exclusivo.",
    image: run,
    isNew: true,
  },
]

export default function Modalities() {
  return (
    <section id="modalities" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Nossas Modalidades
        </motion.h2>
        <div className="flex overflow-x-auto pb-4 space-x-6 md:space-x-8 lg:justify-center lg:overflow-x-hidden">
          {modalities.map((modality, index) => (
            <motion.div
              key={modality.name}
              className={`flex-none w-64 sm:w-72 md:w-60 relative rounded-lg overflow-hidden shadow-lg group ${modality.isNew ? "border-2 border-accent" : "border border-tertiary"} bg-secondary`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={modality.image || "/placeholder.svg"}
                alt={modality.name}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`p-4 ${modality.isNew ? "bg-accent text-primary" : "bg-secondary"}`}>
                <h3 className="text-xl font-bold mb-1">{modality.name}</h3>
                <p className={`text-sm ${modality.isNew ? "text-primary-700" : "text-white-50"}`}>
                  {modality.description}
                </p>
                {modality.isNew && (
                  <span className="absolute top-4 right-4 bg-primary text-accent text-xs font-bold px-3 py-1 rounded-full">
                    NOVA!
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

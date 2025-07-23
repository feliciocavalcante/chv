

import { motion } from "framer-motion"
import contato from "../assets/contato.png"

const testimonials = [
  {
    name: "Ana Paula S.",
    quote:
      "O Complexo CHV transformou minha rotina! A estrutura é impecável e os coaches são incríveis. Recomendo a todos!",
    photo: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Marcos V.",
    quote:
      "Sempre busquei um lugar que me desafiasse e me fizesse evoluir. No CHV encontrei isso e muito mais. Meus resultados nunca foram tão bons!",
    photo: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Fernanda L.",
    quote:
      "A modalidade CHV Run é fantástica! Sinto que estou preparada para qualquer desafio. O ambiente é super motivador.",
    photo: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          O Que Nossos Alunos Dizem
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-primary p-8 rounded-lg shadow-lg text-center border border-tertiary"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={contato}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-accent"
              />
              <p className="italic text-lg mb-4 text-white-50">"{testimonial.quote}"</p>
              <p className="font-bold text-white">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Plano Essencial",
    price: "R$ 199/mês",
    benefits: [
      "Acesso ilimitado a uma modalidade",
      "Avaliação física inicial",
      "Suporte online",
      "Acesso à área de convivência",
    ],
    isPopular: false,
  },
  {
    name: "Plano Premium",
    price: "R$ 299/mês",
    benefits: [
      "Acesso ilimitado a duas modalidades",
      "Avaliação física completa",
      "Acompanhamento nutricional (1 sessão)",
      "Desconto em eventos CHV",
      "Acesso à área de convivência",
    ],
    isPopular: true,
  },
  {
    name: "Plano Elite",
    price: "R$ 399/mês",
    benefits: [
      "Acesso ilimitado a todas as modalidades",
      "Avaliação física completa e mensal",
      "Acompanhamento nutricional (2 sessões)",
      "Personal trainer (1 sessão/mês)",
      "Acesso VIP a eventos CHV",
      "Acesso à área de convivência",
    ],
    isPopular: false,
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Escolha Seu Plano
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`p-8 rounded-lg shadow-xl text-center ${plan.isPopular ? "bg-accent text-primary border-2 border-accent-dark" : "bg-secondary border border-tertiary"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.isPopular && (
                <div className="mb-4">
                  <span className="bg-primary text-accent px-4 py-1 rounded-full text-sm font-bold">Mais Popular</span>
                </div>
              )}
              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
              <p className={`text-4xl font-extrabold mb-6 ${plan.isPopular ? "text-primary" : "text-white"}`}>
                {plan.price}
              </p>
              <ul className="text-left mb-8 space-y-3">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className={`flex items-center ${plan.isPopular ? "text-primary" : "text-white-50"}`}>
                    <CheckCircle className={`w-5 h-5 mr-3 ${plan.isPopular ? "text-primary" : "text-accent"}`} />
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-block w-full py-3 rounded-full font-bold text-lg transition-colors duration-300 ${
                  plan.isPopular
                    ? "bg-primary text-accent hover:bg-tertiary"
                    : "bg-accent text-primary hover:bg-accent-dark"
                }`}
              >
                Assinar Agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-secondary text-white" // Ajuste a cor do texto para branco aqui
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {" "}
        {/* Aumente a largura máxima do container */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12" // Centralize o título e aumente o espaçamento
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Sobre o Complexo CHV
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {" "}
          {/* Layout flexível para imagem e texto */}
          <motion.div
            className="md:w-1/2" // Metade da largura em telas maiores
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/placeholder.svg?height=720&width=1280" // Imagem de placeholder
              alt="Interior do Complexo CHV"
              className="rounded-lg shadow-xl object-cover w-full h-auto" // Estilo da imagem
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-center md:text-left" // Metade da largura, alinhamento de texto
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-white-50">
              {" "}
              {/* Espaçamento e cor do texto */}O Complexo CHV é mais do que um centro de treinamento; é um ambiente
              onde a excelência e a paixão pelo movimento se encontram. Com uma estrutura de ponta, equipamentos
              modernos e uma equipe de coaches altamente qualificada, garantimos uma experiência de treino premium e
              resultados reais.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white-50">
              {" "}
              {/* Espaçamento e cor do texto */}
              Nosso espaço foi projetado para inspirar e desafiar, oferecendo um ambiente acolhedor e motivador para
              todos os níveis de condicionamento físico. Venha descobrir o diferencial CHV e eleve seu potencial.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

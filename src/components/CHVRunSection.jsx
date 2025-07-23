
import { motion } from "framer-motion"
import corrida from "../assets/corrida.png"

export default function CHVRunSection() {
  return (
    <section id="chv-run" className="py-16 md:py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-accent"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Apresentamos: CHV Run!
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={corrida}
              alt="Corredores CHV Run"
              className="rounded-lg shadow-xl object-cover w-full h-auto border-2 border-accent"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Supere Seus Limites na Pista e na Vida!</h3>
            <p className="text-lg md:text-xl mb-6 leading-relaxed text-white-50">
              A CHV Run é a mais nova modalidade do Complexo CHV, projetada para corredores de todos os níveis. Seja
              você um iniciante buscando seus primeiros quilômetros ou um atleta experiente visando recordes pessoais,
              nossos programas de treinamento são personalizados para levar sua corrida ao próximo nível.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-white-50">
              Com coaches especializados, treinos em grupo motivadores e foco em técnica, resistência e prevenção de
              lesões, a CHV Run é o caminho para você conquistar suas metas e sentir a liberdade de correr.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 bg-accent border-2 border-accent text-[#FFA500] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#333232] transition-colors duration-300">
              Agende sua Aula Experimental de CHV Run!
            </a>
          </motion.div>
        </div>

        {/* Seção de Vídeo */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-white">Veja a CHV Run em Ação!</h3>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-accent">
            {/* Placeholder para o vídeo. Em um projeto real, você usaria um iframe do YouTube/Vimeo ou um componente de vídeo. */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/mXiz3Xv1-7w" // Substitua por um link de vídeo real
              title="CHV Run Teaser"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            {/* Botão de Play de exemplo, se o vídeo não for autoplay */}
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <PlayCircle className="w-24 h-24 text-white cursor-pointer hover:text-accent transition-colors" />
            </div> */}
          </div>
          <p className="mt-4 text-sm text-white-50">Assista ao nosso vídeo e sinta a energia da CHV Run.</p>
        </motion.div>
      </div>
    </section>
  )
}

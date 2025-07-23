
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <motion.footer
      className="bg-tertiary py-12 md:py-16 text-white-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}>

      <div className="container bg-[#1c1c1c] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Contato */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-accent" />
              (85) 99715-6111
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-accent" />
              contato@complexochv.com
            </li>
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
              Av. Dr. Mendel Steinbruch, 10285 - Pajuçara, Maracanaú - CE
            </li>
          </ul>
        </div>

        {/* Formulário de Agendamento (NOVO) */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Agende sua Aula Experimental</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              // Lógica de envio do formulário aqui (ex: console.log, fetch para API)
              const formData = new FormData(e.target)
              const data = Object.fromEntries(formData.entries())
              console.log("Dados do formulário:", data)
              alert("Agendamento enviado! Entraremos em contato em breve.")
              e.target.reset() // Limpa o formulário
            }}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Seu Nome"
                required
                className="w-full p-3 rounded-md bg-secondary border border-tertiary text-white placeholder-white-50 focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Seu Email"
                required
                className="w-full p-3 rounded-md bg-secondary border border-tertiary text-white placeholder-white-50 focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Seu Telefone (opcional)"
                className="w-full p-3 rounded-md bg-secondary border border-tertiary text-white placeholder-white-50 focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <select
                name="modality"
                required
                className="w-full p-3 rounded-md bg-[#333232] border border-tertiary text-white placeholder-white-50 focus:outline-none focus:ring-1 focus:ring-accent">

                <option value="">Escolha a Modalidade</option>
                <option value="Crossfit">Crossfit</option>
                <option value="Performance">Performance</option>
                <option value="Funcional">Funcional</option>
                <option value="Futevôlei">Futevôlei</option>
                <option value="CHV Run">CHV Run</option>
              </select>
            </div>
            <div>
              <textarea
                name="message"
                rows="3"
                placeholder="Mensagem (opcional)"
                className="w-full p-3 rounded-md bg-secondary border border-tertiary text-white placeholder-white-50 focus:outline-none focus:ring-1 focus:ring-accent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full   font-bold py-3  cursor-pointer  border border-accent text-accent  hover:bg-[#333232] hover:text-white transition-colors duration-300">
              Agendar Aula
            </button>
          </form>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Siga-nos</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white-50 hover:text-accent transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-[#E1306C]" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white-50 hover:text-accent transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-[#3b5998]" />
            </a>
            <a href="#" aria-label="YouTube" className="text-white-50 hover:text-accent transition-colors duration-300">
              <FontAwesomeIcon icon={faYoutube} size="2x" className="text-[#FF0000]" />
            </a>
          </div>
        </div>

        {/* Mapa e Institucional */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Localização</h3>
          <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
            <iframe
              title="Mapa - Complexo CHV"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9463652831337!2d-38.67678022512477!3d-3.8532884431410336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748e021d01389%3A0xf31bfa160ce3fe0!2sComplexo%20CHV!5e0!3m2!1spt-BR!2sbr!4v1715709651482!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Complexo CHV. Todos os direitos reservados.</p>
        </div>
      </div>
    </motion.footer>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react" // Importe os ícones do Lucide React

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Sobre Nós", href: "#about" },
    { name: "Modalidades", href: "#modalities" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Planos", href: "#plans" },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false) // Fecha o menu mobile após clicar
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-90 backdrop-blur-sm py-4 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.img
          src="/placeholder.svg?height=50&width=150"
          alt="Complexo CHV Logo"
          className="h-12 object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        {/* Menu para Desktop */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href)
              }}
              className="text-white text-lg font-medium hover:text-accent transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Botão de Menu para Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.nav
          className="md:hidden bg-primary bg-opacity-95 py-4 mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="text-white text-xl font-medium hover:text-accent transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}

// components/Footer.js
"use client"
import { Github, Linkedin, Twitter, Mail, GithubIcon, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/AniketKaushik19" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/aniket-kaushik-7354b2297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com/aniket_kaushik09" },
    { icon: Mail, label: "Email", href: "mailto:aniketsskaushik@gmail.com" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-gray-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
              Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Crafting beautiful and functional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm md:flex md:flex-col md:gap-2">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Me</h4>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={index}
                    variants={itemVariants}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-400">
             {new Date().getFullYear()} MyPortfolio. Built with <span className="text-blue-400 font-semibold">Next.js</span>, <span className="text-blue-400 font-semibold">Tailwind CSS</span>, & <span className="text-blue-400 font-semibold">Framer Motion</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}

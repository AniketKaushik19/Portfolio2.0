// components/Hero.js
"use client"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-8xl font-extrabold mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
            Aniket Kaushik
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
        >
          A passionate full-stack developer crafting interactive, performant, and user-centric web experiences.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <Link href="/Aniket CV.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </Link>
          </button>
          
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 z-10"
      >
        <ArrowDown size={32} className="text-blue-400" />
      </motion.div>
    </section>
  )
}

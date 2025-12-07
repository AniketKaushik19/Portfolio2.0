// components/About.js
"use client"
import { motion } from "framer-motion"
import { Code2, Zap, Globe, Users, DatabaseIcon } from "lucide-react"

export default function About() {
  const skills = [
    { icon: Code2, label: "Frontend", items: ["React", "Next.js", "Tailwind CSS" ,"ShadCn" ,"daisyui"] },
    { icon: Zap, label: "Backend", items: ["Node.js", "APIs", "express" ,"JWT"] },
    { icon: DatabaseIcon, label: "Database", items: ["MongoDB", "Convex", "Cloudinary" ,"ImageKit" , "MySql"] },
    { icon: Globe, label: "Web", items: ["Responsive", "SEO", "Performance"] },
    { icon: Users, label: "Soft", items: ["Collaboration", "Problem Solving", "Communication"] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Me
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              I am a passionate developer building beautiful, intuitive, and performant web applications. I focus on modern web technologies and creating user-focused solutions.
            </p>

            <div className="space-y-6">
              {skills.map((skill, i) => {
                const IconComponent = skill.icon
                return (
                  <motion.div key={i} variants={itemVariants} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                      <div>
                        <h3 className="font-bold">{skill.label}</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {skill.items.map((it, idx) => (
                            <span key={idx} className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 rounded-full border border-white/10">
                              {it}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <img src="/profile.png" alt="Aniket Kaushik" className="w-100 h-100 md:w-200 md:h-180 rounded-xl object-cover  shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

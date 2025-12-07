// components/ProjectCard.js
"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ProjectCard({ title, description, link, github, tags = [] }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full p-6 bg-black/80 backdrop-blur-md border border-white/10 text-white hover:border-blue-400/50 transition-all duration-300 group overflow-hidden relative">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-2xl font-bold group-hover:text-blue-300 transition-colors">{title}</h2>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Github size={20} className="text-gray-300 hover:text-white" />
              </a>
            )}
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group/link"
          >
            View Project
            <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      </Card>
    </motion.div>
  )
}

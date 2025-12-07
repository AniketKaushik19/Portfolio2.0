// components/Certificates.js
"use client"
import { Card } from "@/components/ui/card"

export default function Certificates() {
  const certs = [
    { title: "Full Stack internship", issuer: "InlignX Global pvt. ltd.", year: "2025", link: "inlignx.jpeg" },
    { title: "AI-Prompt-A-Thon", issuer: "Amity University", year: "2025", link: "aiprompt.jpeg" },
    { title: "Frontend Hackathon", issuer: "IIT Bhubaneswar", year: "2025", link: "iitbhu.jpeg" },
    { title: "Data structure in C", issuer: "NPTEL", year: "2024", link: "nptelc.jpeg" },
    { title: "Python for Data Science", issuer: "NPTEL", year: "2023", link: "nptel.webp" },
    { title: "Fast Typing", issuer: "10fastfinger", year: "2022", link: "typing.png" },
  ]

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Certificates
        </h2>
        <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
          Selected certifications and professional training that demonstrate skills and continued learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => (
            <Card key={i} className="p-5 bg-black/70 border border-white/10 text-white">
              <h3 className="font-semibold text-lg mb-1">{c.title}</h3>
              <p className="text-sm text-gray-300">{c.issuer} • {c.year}</p>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-cyan-300 hover:underline text-sm">
                View Certificate →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
